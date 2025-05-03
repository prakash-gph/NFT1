import express, { json } from "express"
import cors from"cors"
import dotenv from "dotenv";
import {routers,contactRouters,volunteerRouters} from "./router/urouter.js";
// import {otpVerifiy} from "./router/urouter.js"
import connectdb from "./database/db.js"
const app = express()
dotenv.config()
const port = process.env.PORT || 1200;
 
app.get("/",(req,res)=>{
    res.json("api is working")
    
 })
app.use(json())
app.use(cors())
app.use(routers)
app.use(contactRouters)
app.use(volunteerRouters)
// app.use(otpVerifiy)



app.listen(port, () => {
    console.log(`Server is running ${port}`)
    connectdb()
})
