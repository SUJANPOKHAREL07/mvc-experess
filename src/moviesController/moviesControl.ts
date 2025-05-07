import movies from '../modal/movies'
import express,{ Request,Response } from "express";
import { createMvoies,UpdateMovies,DeleteMovies } from '../modal/movies';
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
   
    if(!name || !ticket || !description){
        res.status(404).json({error:"the request movie is not available"})
    } 
    const movies=UpdateMovies({
        id:productid,
        name:name,
        ticket:ticket,
        description:description,
    })
   if(!movies){(
    res.status(500).json({error:"something went wrong"})
)
   }
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
   
   
  const delMovie=DeleteMovies(
    parseInt(req.params.id)
  )
    // if(!delMovie ){
    //     res.status(404).json({error:"the request movie isnot available"})
    // }
  
    res.status(200).json(delMovie)
}
