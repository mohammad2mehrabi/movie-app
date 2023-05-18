import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Regester/SignupPage';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails';
import Genre from './pages/Genre';
import NotFound from './components/NotFound'
import Profile from './pages/Profile'
import AddMovieMainPage from './pages/AddMoviePage/AddMovieMainPage';
import Loading from './pages/Land/LandingPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/addmoviemainpage" element={<AddMovieMainPage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/moviedetails/:id" element={<MovieDetails />} />
        <Route exact path="/genre/:id" element={<Genre />} />
        <Route exact path="/404" element={<NotFound />} />
        <Route exact path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
