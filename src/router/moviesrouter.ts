import express from "express";
import { CreateMoviesPush, DeleteMoviByID, MovieByID, MoviesGet, UpadteMoviesPut } from "../moviesController/moviesControl";

const movierouter = express.Router();

movierouter.post('/',CreateMoviesPush)
movierouter.post('/',MoviesGet)
movierouter.post('/:id',UpadteMoviesPut)
movierouter.post('/:id',MovieByID)
movierouter.post('/:id',DeleteMoviByID)