import mongoose from "mongoose"

//1- Create a schema
//2- create a model based of the schema created


// Artist Schema

const artistSchema = new mongoose.Schema(
    {
        artist_name:{
            type:String,
            required:true,
        },
        bio:String,
        genre:[String],
    },
    {timestamps:true} //The signed date of the artist
)


const Artist = mongoose.model("Artist",artistSchema)

export default Artist;









// Normal Schema
// const noteSchema = new mongoose.Schema(
//     {
//         title: {
//             type:String,
//             required: true,
//         },
//             content:{
//                 type:String,
//                 required:true,
//             },
//     },
//     {timestamps: true}
// )