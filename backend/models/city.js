import mongoose from "mongoose";
import {Schema} from "mongoose";

const CitySchema = new Schema({
 
    name: {
        type: String,
       

        
    },
   
   
    
  
    
    

    
   

   
},  { timestamps: true})

export default mongoose.model("City", CitySchema)

