import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import '../../../css/style-login.css'
import './AddMovie.css'
import { Link, useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [imdbId, setImdbId] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [imdbRating, setImdbRating] = useState('');
  const [imdbVotes, setImdbVotes] = useState('');
  const [poster, setPoster] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post('/api/v1/movies', {
        title: title,
        imdb_id: imdbId,
        country: country,
        year: year,
        director: director,
        imdb_rating: imdbRating,
        imdb_votes: imdbVotes,
        poster: poster
      });

      console.log(response.data);

      Cookies.set('addedMovieId', response.data.id);
      Cookies.set('addedMovieTitle', response.data.title);


      setTitle('');
      setImdbId('');
      setCountry('');
      setYear('');
      setDirector('');
      setImdbRating('');
      setImdbVotes('');
      setPoster('');
      setMessage('Movie added successfully!');

      const addedMovie = {
        id: response.data.id,
        title: response.data.title
      };

      const existingMovies = JSON.parse(localStorage.getItem('Added-Movies')) || [];
      const updatedMovies = [...existingMovies, addedMovie];
      localStorage.setItem('Added-Movies', JSON.stringify(updatedMovies));

    } catch (err) {
      setMessage('Error adding movie. Please try again.');
    }
  };

  return (
    <div className="container1">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <h3 className="title">Add Movie</h3>
            <div className="input-field">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="add-movie-input"
              />

            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="IMDB ID"
                value={imdbId}
                onChange={(e) => setImdbId(e.target.value)}
                required
                className="add-movie-input"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="add-movie-input"
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
                className="add-movie-input"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                className="add-movie-input"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="IMDB Rating"
                value={imdbRating}
                onChange={(e) => setImdbRating(e.target.value)}
                className="add-movie-input"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="IMDB Votes"
                value={imdbVotes}
                onChange={(e) => setImdbVotes(e.target.value)}
                className="add-movie-input"
              />
            </div>
            <div className="input-field">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setPoster(reader.result);
                  };
                  reader.readAsDataURL(e.target.files[0]);
                }}
                className="add-movie-input"
              />
            </div>
            <button type="submit" className="btn transparent">Add Movie</button>
          </form>
          {message && <p className="add-movie-message">{message}</p>}
        </div>
      </div>
      <div className="panels-container  dis">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <p onClick={() => { navigate("/home") }}>Bak to Home</p>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>

      </div>
    </div>
  );
};

export default AddMovie;
