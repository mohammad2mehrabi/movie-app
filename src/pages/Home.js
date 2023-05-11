import React from "react";
import "../css/style.css";
import Nav from "./Navbar";
import { useState, useEffect, useCallback } from "react";
import { enhancedFetch } from "../services/Http";
import { debounce } from "lodash";
import Header from "../components/Header"
import Loading from "../components/Loading"
import ErrorMessage from "../components/ErrorMessage"
import MovieCards from "../components/MovieCards";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
const BASE_API_URL = `https://moviesapi.ir`;

function Home() {

    let navigate = useNavigate()

    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [pageCount] = useState(25)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)


    const fetchMovie = useCallback(async () => {
        try {
            setLoading(true)
            const response = await enhancedFetch(BASE_API_URL + `/api/v1/movies?q=${search}&page=${page}`)
            setMovies(response.data)

        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }

    }, [search, page])


    const fetchGenre = useCallback(async () => {
        try {
            setLoading(true)
            const response = await enhancedFetch(BASE_API_URL + `/api/v1/genres`)
            setGenres(response)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [])


    useEffect(() => {
        fetchMovie()
        fetchGenre()
    }, [fetchMovie, fetchGenre])

    console.log('movie', movies)
    console.log('genres', genres)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const debouncedOnChange = debounce(handleChange, 300);

    const filteredMovies = movies.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )




    const handleModalClose = () => {
        setLogin(false)
        setRegister(false)
    }


    const renderMovies = () => {

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage />
        }

        const filterNewMovie = filteredMovies.sort((a, b) => b.year - a.year)

        return filterNewMovie.map(movie => {
            return (
                <MovieCards
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster}
                    id={movie.id}
                    genres={movie.genres.join(', ')}
                    year={movie.year}

                />
            );
        })

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Nav />
            <div className="wrapper">
                <br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br>

                <div className="container01">
                    <div className="InnerDiv">
                        <div className="center">
                            <p className="title">Responsive Movie</p>
                            <p className="sub_des">God of War is an action-adventure movie franchise created by David Jaffe at Sony's Santa Monica Studio.</p>
                            <div className="btns">
                                <button onClick={() => { navigate("/profile") }}>My profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home" style={{ zIndex: 20 }}>
                <Header
                    setSearch={setSearch}
                    search={search}
                    setPage={setPage}
                    genres={genres}
                    debouncedOnChange={debouncedOnChange}
                />

                <div className="box">
                    <div className="row justify-content-center col-lg-12 pt-5 pb-2">
                        <div className="col-lg-12 col-12">
                            <div className="row">
                                {renderMovies()}
                            </div>
                        </div>
                    </div>
                    <Pagination
                        setPage={setPage}
                        pageCount={pageCount}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;