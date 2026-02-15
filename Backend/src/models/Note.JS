import mongoose from "mongoose"

//1- Create a schema
//2- create a model based of the schema created


// Artist Schema

const artistSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        genre:{
        type:String,
        required:true
        },
       music_type: {
         type:String
        },
       total_song:{
       type:String,
       required:true
       }
    },
    {timestamps:true} //The signed date of the artist
)


const Artist = mongoose.model("Artist",artistSchema)










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