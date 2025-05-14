import { NextFunction,Request,Response } from "express";
export const  middlewareAdmin=(req:Request,res:Response,next:NextFunction)=>{
    const role=req.query.role;
    if(role==="admin"){
        next();
        return
    }
    else{
        next({
           
            message:"cannot look or add into the data",
             status:404,
        })
        return;
    }

}


// export function middlewareUser(req:Request,res:Response,next:NextFunction){
//     const role=req.query.role
//     if(role==="user"){
//         next();
//         return;
//     }
//     else{
//         next({
//             status:404,
//             message:"cannot look or add into the data"
//         })
//         return;
//     }

// }

