import mongoose from "mongoose";
import {Schema, ObjectId } from "mongoose";

const orderSchema = new Schema({
    
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 255,
        text: true,
        index: true
    },
    birthday: {
        type: Date,
        
    },
    sex: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true,
        index: true
       
    },
    email: {
        type: String,
       
    },
    address: {
        type: String,
    },
    company_name: {
        type: ObjectId,
        ref: "Company"
    },
    product_order: [],
    payment: {
        type: String,
    },
    status: {
        type: String
    },
    user_id: {

        type: ObjectId,
        ref: "User"

    }
  

   

    

    
   

   
},  { timestamps: true});
orderSchema.index({"$**": "text"});

export default mongoose.model("Order", orderSchema)

