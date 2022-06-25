const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv').config();
const { API_KEY } = process.env;
const API_BASE = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const app = express();
app.use(cors());

const port = 4240;

const getMovieById = async (id) => {
    const movie = await axios.get(`${API_BASE}&i=${id}`);
    return movie.data;
};

const getMovies = async (search, page = 1) => {
    const movies = await axios.get(`${API_BASE}&r=json&s=${search}&page=${page}`);
    return movies.data;
};

app.get('/movies/:id', async (req, res, next) => {
    const id = req.params.id;
    if(!/ev\d{7}\/\d{4}(-\d)?|(ch|co|ev|nm|tt)\d{7}/.test(id)){
        res.status(400);
        return res.send('Invalid IMDB movie ID');
    }
    try{
        const movie = await getMovieById(id);
        // OMDB does not use RESTful status codes
        if(movie.Response === "True"){
            return res.json(movie);
        }
        return res.sendStatus(404);
    } catch (e){
        return next(e);
    }
});

app.get('/movies', async (req, res, next) => {
    const { search, page } = req.query;
    try {
        const movies = await getMovies(search, page);
        // OMDB does not use RESTful status codes
        if(movies.Response === "True"){
            return res.json(movies.Search);
        }
        return res.sendStatus(404);
    } catch (e){
        return next(e);
    }
});

app.listen(port);
