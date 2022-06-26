import React from 'react';
import batman from "./batman.jpeg";
import './Movies.css'

const Movies = () => {
  return (
    <div className="movies">
      <div className="movies__grid">
      <h2>Batman</h2>
      <img src={batman} alt="image"/>
      <div className="movies__container">
        <p>Rating</p>
        <p>Votes</p>
      </div>
      </div>
      <div className="movies__grid">
      <h2>Batman</h2>
      <img src={batman} alt="image"/>
      <div className="movies__container">
        <p>Rating</p>
        <p>Votes</p>
      </div>
      </div>
      <div className="movies__grid">
      <h2>Batman</h2>
      <img src={batman} alt="image"/>
      <div className="movies__container">
        <p>Rating</p>
        <p>Votes</p>
      </div>
      </div>
      <div className="movies__grid">
      <h2>Batman</h2>
      <img src={batman} alt="image"/>
      <div className="movies__container">
        <p>Rating</p>
        <p>Votes</p>
      </div>
      </div>
      <div className="movies__grid">
      <h2>Batman</h2>
      <img src={batman} alt="image"/>
      <div className="movies__container">
        <p>Rating</p>
        <p>Votes</p>
      </div>
      </div>
    </div>
  )
}

export default Movies;