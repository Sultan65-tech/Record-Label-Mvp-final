import express from "express"
import deleteArtist, { createArtist, getAllartists, updateArtist } from "../controllers/artistsController.js"
const router = express.Router();

router.get("/",getAllartists)

router.post("/",createArtist)

router.put("/:id",updateArtist)

router.delete("/:id",deleteArtist)


export default router