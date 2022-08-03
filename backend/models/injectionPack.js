import mongoose from "mongoose";
import {Schema, ObjectId} from "mongoose";

const injectionParkSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
   
    imagePark: {
        type: String,
        

    },
    
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    category_id: {
        type: ObjectId,
        ref: "Category"
    },
    subcategory_id: {
        type: ObjectId,
        ref: "Subcategory"
    }
    
    

    
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Injectionpark", injectionParkSchema)

