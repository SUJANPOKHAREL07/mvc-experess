import movies from '../modal/movies'
import express,{ Request,Response } from "express";
const router=express()
router.post('/movies',(req:Request,res:Response)=>{
    const{name,ticket,description}=req.body;
    const newMovies={
        id:movies.length+1,
        name:name,
        ticket:ticket,
        description:description,
    }
    movies.push(newMovies);
    res.status(200).json(newMovies)
})
router.get('/movies',(req:Request,res:Response)=>{
    res.json(movies)
})

router.put('/movies/:id',(req:Request,res:Response)=>{
    // ? in url
    // const productid=req.id
    const moviesId=parseInt(req.params.id)
    const {name,ticket,description}=req.body;
    const moviesIndex=movies.findIndex((m)=>m.id===moviesId)
    if(moviesIndex==-1){
        res.status(404).json({error:"the request movie is not available"})
    }
    movies[moviesIndex]={
        ...movies[moviesIndex],
        name,
        ticket,
        description,

    }
    res.status(200).json(movies[moviesIndex])
})
router.get('/moives/:id',(req:Request,res:Response)=>{
    
    const moviesId=parseInt(req.params.id)
    const movie=movies.find((m)=>m.id=moviesId)
    if(!movie)[
        res.status(404).json({error:"The movie doesnot exist"})
    ]
    res.status(200).json(movie)
  
})
router.delete('/movies/:id',(req:Request,res:Response)=>{
    const moviesId=parseInt(req.params.id)
    const movie=movies.find((m)=>m.id==moviesId)
    if(!movie){
        res.status(404).json({error:"the request movie isnot available"})
    }
    const Delmovie=movies.splice(moviesId,1)
    res.status(200).json(Delmovie)
})
