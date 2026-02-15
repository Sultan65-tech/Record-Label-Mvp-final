export function getAllartists(req,res){
    res.status(200).json({message:"You just Fetched your artists"})
}
export function createArtist(req,res){
    res.status(201).json({message:"Artist added Successfully"})
}
export function updateArtist(req,res){
    res.status(201).json({message:"Artist updated Successfully"})
}
export default function deleteArtist(req,res){
    res.status(200).json({message:"Artist deleted Successfully"})
}