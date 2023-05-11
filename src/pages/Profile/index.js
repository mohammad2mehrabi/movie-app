import "./stylep.css"
import { FaAngleDoubleLeft } from "react-icons/fa";


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {
    const [user, setUser] = useState({});
    const [bookmarks, setBookmarks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [isIconModalOpen, setIsIconModalOpen] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const accessToken = JSON.parse(localStorage.getItem('Access-Token'));

            try {
                const userResponse = await axios.get('/api/user', {
                    headers: {
                        authorization: accessToken,
                        "accept": "application/json"
                    }
                });
                setUser(userResponse.data);
            } catch (error) {
                if (error.response.status === 401) {
                    const refreshToken = JSON.parse(localStorage.getItem('Refresh-Token'));
                    const formData = new URLSearchParams();
                    formData.append('grant_type', 'refresh_token');
                    formData.append('refresh_token', refreshToken);

                    try {
                        const response = await axios.post(
                            'https://moviesapi.ir/oauth/token',
                            formData,
                            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
                        );

                        localStorage.setItem('Access-Token', JSON.stringify(`Bearer ${response.data.access_token}`));
                        localStorage.setItem('Refresh-Token', JSON.stringify(response.data.refresh_token));

                        const fetchUserData = async () => {
                            const accessToken = response.data.access_token;

                            try {
                                const userResponse = await axios.get('/api/user', {
                                    headers: {
                                        authorization: accessToken,
                                        "accept": "application/json"
                                    }
                                });
                                setUser(userResponse.data);
                            } catch (error) {
                                if (error.response.status === 401) {
                                    const accessToken = JSON.parse(localStorage.getItem('Access-Token'));
                                    try {
                                        const userResponse = await axios.get('/api/user', {
                                            headers: {
                                                authorization: accessToken,
                                                "accept": "application/json"
                                            }
                                        });
                                        setUser(userResponse.data);
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                            }
                        }

                        fetchUserData();

                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    console.log(error);
                }
            }
        };

        const fetchBookmarks = () => {
            const bookmarksData = JSON.parse(localStorage.getItem('bookmarks')) || [];
            setBookmarks(bookmarksData);
        };

        const fetchData = async () => {
            try {
                setIsLoading(true);
                await Promise.all([fetchUserData(), fetchBookmarks()]);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteBookmark = (index) => {
        const newBookmarks = [...bookmarks];
        newBookmarks.splice(index, 1);
        setBookmarks(newBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    };

    const handleIdMovie = (index) => {
        const newBookmarks = [...bookmarks];
        const selectedMovieId = newBookmarks[index].id;
        localStorage.setItem('selectedMovieId', selectedMovieId);

        navigate('/FilmDetailsPage');
    };
    const handleIdMovie2 = (index) => {
        const selectedAddedMovieId = AddedMovies[index].id;
        localStorage.setItem('selectedMovieId', selectedAddedMovieId);

        navigate('/FilmDetailsPage');
    };

    const openIconModal = () => {
        setIsIconModalOpen(true);
    };

    const closeIconModal = () => {
        setIsIconModalOpen(false);
    };

    const handleSelectIcon = (iconId) => {
        localStorage.setItem('User-Icon', iconId);
    };

    const AddedMovies = JSON.parse(localStorage.getItem('Added-Movies')) || [];

    return (
        <div className="profile-page-back">
            {isLoading ? (
                <div className="progress" style={{ direction: "ltr" }}>
                </div>
            ) : (
                <div className='profile-page'>
                </div>
            )}


            <div>
                <div className="header__wrapper">
                    <header></header>
                    <div className="cols__container">
                        <div className="left__col">
                            <div className="img__container">
                                <img src="https://cdn.dribbble.com/users/1176657/screenshots/15468294/media/34af996ddff444391edab94abcf3c7f3.png?compress=1&resize=400x300&vertical=top" alt="Anna Smith" />
                                <span></span>
                            </div>
                            <h2> {user.name} </h2>
                            <p> ID: {user.id}</p>
                            <p> {user.email}</p>
                            <p>Your Account Created: {user.created_at}</p>

                            <ul className="about  ul5">
                                <li><span>4,073</span>Followers</li>
                                <li><span>322</span>Following</li>
                                <li><span>200,543</span>Attraction</li>
                            </ul>

                            <div className="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
                                    erat volutpat.
                                </p>


                                <ul className="ul5">
                                    <li><i className="fab fa-twitter"></i></li>
                                    <i className="fab fa-pinterest"></i>
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-dribbble"></i>
                                </ul>
                                <br />
                                <br />
                                <div>
                                    <span></span> <FaAngleDoubleLeft /> <span onClick={()=> { navigate("/home")}}>go bak to home</span>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;