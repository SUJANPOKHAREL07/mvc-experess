import movies from '../modal/movies'
import express,{ Request,Response } from "express";
import { createMvoies,UpdateMovies } from '../modal/movies';
const router=express()
export function CreateMoviesPush(req:Request,res:Response){
    const{name,ticket,description}=req.body;
    
    const newMovies=createMvoies({
        name:name,
        ticket:ticket,
        description:description,
    })
    
    res.status(200).json(newMovies)
}
export function MoviesGet(req:Request,res:Response){
    res.json(movies)
}

export function UpadteMoviesPut(req:Request,res:Response){
    // ? in url
    const productid=parseInt(req.params.id)
    
    const {name,ticket,description}=req.body;
    const movies=UpdateMovies({
        id:productid,
        name:name,
        ticket:ticket,
        description:description,
    })
    // if(moviesIndex==-1){
    //     res.status(404).json({error:"the request movie is not available"})
    // }
   
    res.status(200).json(movies)
    
}
export function MovieByID(req:Request,res:Response){
    
    const moviesId=parseInt(req.params.id)
    const movie=movies.find((m)=>m.id=moviesId)
    if(!movie)[
        res.status(404).json({error:"The movie doesnot exist"})
    ]
    res.status(200).json(movie)
  
}
export function DeleteMoviByID(req:Request,res:Response){
    const moviesId=parseInt(req.params.id)
    const movie=movies.find((m)=>m.id==moviesId)
    if(!movie){
        res.status(404).json({error:"the request movie isnot available"})
    }
    const Delmovie=movies.splice(moviesId,1)
    res.status(200).json(Delmovie)
}
