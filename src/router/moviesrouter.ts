import express from "express";
import { CreateMoviesPush, DeleteMoviByID, MovieByID, MoviesGet, UpadteMoviesPut } from "../moviesController/moviesControl";

const movierouter = express.Router();

movierouter.post('/',CreateMoviesPush)
movierouter.get('/',MoviesGet)
movierouter.put('/:id',UpadteMoviesPut)
movierouter.get('/:id',MovieByID)
movierouter.delete('/:id',DeleteMoviByID) 

export default movierouter