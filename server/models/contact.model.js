import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    message:{
        type:String,
        required:true,
        trim:true,
    },
   
})


export const Contact = mongoose.model('Contact', contactSchema)