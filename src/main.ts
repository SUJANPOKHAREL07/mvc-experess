import express,{Request, Response} from 'express'
const app=express();
app.use(express.json())
app.get("/",(req:Request, res:Response )=>{
    res.send("Server just got started")
})
const PORT = 2000

interface Hotels{
    id:Number,
    name:string,
    description:string,
}
const hotel:Hotels[]=[]


app.post('/hotels',(req:Request,res:Response)=>{
    const{name,description}=req.body
    const newHOtels={
        id:hotel.length+1,
        name:name,
        description:description,
    }
    hotel.push(newHOtels);
    res.status(200).json(newHOtels)
})
app.get("/hotels",( req:Request,res:Response)=>{
    res.json(hotel)
})

app.listen(PORT ,()=>{
    console.log("working on port no:",PORT)
})
