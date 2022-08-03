import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const productSchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 255,
        text: true,
        index: true
    },
    code: {
        type: String,

    },
    image: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 32
    },
    description: {
        type: String,
        required: true,
        text: true
    },


    slug: {
        type: String,
        lowercase: true,
        slug: "name"
    },
    subcategory_id: {
        type: ObjectId,
        ref: "Subcategory"
    },
    category_id: {
        type: ObjectId,
        ref: "Category"
    },
    quanlity: {
        type: Number,
    },
    start_use: {
        type: Date,
        required: false
    },
    end_use: {
        type: Date,
        required: false

    },
    available: {
        type: Boolean,
        required: false
    },

    injectionPark_id: {
        type: ObjectId,
        ref: "Injectionpark"

    }







}, { timestamps: true });
productSchema.index({ "$**": "text" });

export default mongoose.model("Product", productSchema)

