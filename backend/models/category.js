import mongoose from "mongoose";
import {Schema} from "mongoose";

const cagegorySchema = new Schema({
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
       
    }
    
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Category", cagegorySchema)

