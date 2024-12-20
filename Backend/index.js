import dotenv from "dotenv"
import { app } from "./app.js"
import connectDb from "./db/db.js"

dotenv.config({
    path:'./.env'
})

connectDb().then(()=>{
    app.listen(8000,()=>{
        console.log("Process is running at port 8000")
    })
}).catch((err)=>{
    console.log("Connection failed!" ,err)
})



