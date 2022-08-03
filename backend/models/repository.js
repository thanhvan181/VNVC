import mongoose from "mongoose";
import {Schema} from "mongoose";

const repositorySchema = new Schema({
   
    name: {
        type: String,
        required: true, 

        
    },
    address: {
        type: String,
        required: true, 

        
    },
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Repository", repositorySchema)

