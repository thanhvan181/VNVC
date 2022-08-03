import mongoose from "mongoose";
import {Schema, ObjectId} from "mongoose";

const sub_cagegorySchema = new Schema({
    index: {
        type: Number,
         required: true, 
    },
    name: {
        type: String,
        required: true, 

        
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
        required: false, 

    },
    category_id: {
        type: ObjectId,
        ref: "Category"
    }
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Subcategory", sub_cagegorySchema)

