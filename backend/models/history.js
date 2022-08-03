import mongoose from "mongoose";
import {Schema, ObjectId } from "mongoose";

const historySchema = new Schema({
   
    user_id: {
        type: ObjectId,
        ref: "User"
       

        
    },
    product_id: {
        type: ObjectId,
        ref: "Product"
        

        
    },
    

    
   

   
},  { timestamps: true})

export default mongoose.model("History", historySchema)

