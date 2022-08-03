import mongoose from "mongoose";
import {Schema, ObjectId } from "mongoose";

const NumberSchema = new Schema({
   
    name: {
        type: String,
    },
    birthday: {
        type: String,

    },
    sex: {
        type: String,
    },
    code: {
        type: String,
    },
    phone: {
        type: String,
    },
    cmnd: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    company_id: {
       type: String
        // ref: "Company"

    },
    rank: {
        type: String,
    }


    
   

   
},  { timestamps: true})

export default mongoose.model("Number", NumberSchema)

