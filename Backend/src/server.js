// import dotenv from "dotenv"
// import path from "path"
// import { fileURLToPath } from "url" 
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
import express from "express"
import cors from "cors"
import artistsRoutes from "./routes/artistsRoutes.js"
// import { connectDB } from "./config/db.js";
// dotenv.config({path: path.join(__dirname, "../.env")})


const app = express();

// console.log(process.env.MONGO_URI)
//Middleware
app.use(express.json())
app.use(cors())

app.use("/api/artists",artistsRoutes)

// connectDB()

    app.listen(3000,(req,res)=>{
        console.log("Server is up and running")
    })



