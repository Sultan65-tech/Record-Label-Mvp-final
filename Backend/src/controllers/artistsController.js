import Artist from "../models/Artists.js"
export async  function  getAllartists(req,res){
    try{
    const art =await Artist.find({});
    // arguments.save()
    // console.log(art)
    res.status(200).json(art)
}catch(err){
    console.log("Error in get controller")
}
}
export async function createArtist(req,res){
    const art = Artist.insertOne({
    artist_name:req.body.artist_name,
    bio:req.body.bio,
    genre:req.body.genre
        })
    console.log(req.body.artist_name,req.body.bio,req.body.genre);
    art.save()
try {
    // const New_user=await art.save();
    res.status(201).json({message: "User Added successfully"});
} catch (error) {
    console.log("Error in post controller")
}
}
export function updateArtist(req,res){
    res.status(201).json({message:"Artist updated Successfully"})
}
export default function deleteArtist(req,res){
    Artist.deleteOne({_id});
    res.status(200).json({message:"Artist deleted Successfully"})
}