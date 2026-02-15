import express from "express"
import artistsRoutes from "./routes/artistsRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();


//Middleware
app.use(express.json())

app.use("/api/artists",artistsRoutes)

connectDB()



app.listen(3000,(req,res)=>{
    console.log("Server is up and running")
})