

import { error } from 'console'
import express, {NextFunction, Request , Response} from 'express'
import movierouter from './router/moviesrouter'
const app=express()
app.use(express.json())
app.use("/",movierouter)
const port=3000



app.use((error:any, req: Request, res: Response, next: NextFunction)=>{
    console.log("error", error);
    if(error.status === 404 || error.status ===403 || error.ststus === 400){
      res.status(error.status).json(error);
    }
    res.status(500).json({
      message: "Internal server error"
    })
  })


app.listen(port ,()=>{
    console.log(`server is running on the portnp.:${port}`)
})
