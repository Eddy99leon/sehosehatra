import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export interface ICategory extends Document {
    _id: string;
    name: string;
}

const categorySchema = new Schema(
    {
        name:{
            type: String,
            unique: true,
            require: true,
        },
    }
);

export const Category = mongoose.models?.Category || mongoose.model("Category", categorySchema);