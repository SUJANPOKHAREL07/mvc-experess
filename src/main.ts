// import express,{Request, Response} from 'express'
// const app=express();
// app.use(express.json())
// app.get("/",(req:Request, res:Response )=>{
//     res.send("Server just got started")
// })
// const PORT = 2000

// interface Hotels{
//     id:Number,
//     name:string,
//     description:string,
// }
// const hotel:Hotels[]=[]


// app.post('/hotels',(req:Request,res:Response)=>{
//     const{name,description}=req.body
//     const newHOtels={
//         id:hotel.length+1,
//         name:name,
//         description:description,
//     }
//     hotel.push(newHOtels);
//     res.status(200).json(newHOtels)
// })
// app.get("/hotels",( req:Request,res:Response)=>{
//     res.json(hotel)
// })

// app.listen(PORT ,()=>{
//     console.log("working on port no:",PORT)
// })

import { error } from 'console'
import express, {Request , Response} from 'express'
const app=express()
app.use(express.json())
const port=3000
app.get('/',(req:Request,res:Response)=>{
    res.send("server is just started")
})
interface Movies{
    id:number,
    name:string,
    ticket:number,
    description:string,
}
const movies:Movies[]=[]
app.post('/movies',(req:Request,res:Response)=>{
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

app.get('/movies',(req:Request,res:Response)=>{
    res.json(movies)
})

app.put('/movies/:id',(req:Request,res:Response)=>{
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
app.get('/moives/:id',(req:Request,res:Response)=>{
    
    const moviesId=parseInt(req.params.id)
    const movie=movies.find((m)=>m.id=moviesId)
    if(!movie)[
        res.status(404).json({error:"The movie doesnot exist"})
    ]
    res.status(200).json(movie)
  
})
app.delete('/movies/:id',(req:Request,res:Response)=>{
    const moviesId=parseInt(req.params.id)
    const movie=movies.find((m)=>m.id==moviesId)
    if(!movie){
        res.status(404).json({error:"the request movie isnot available"})
    }
    const Delmovie=movies.splice(moviesId,1)
    res.status(200).json(Delmovie)
})


app.listen(port ,()=>{
    console.log(`server is running on the portnp.:${port}`)
})
