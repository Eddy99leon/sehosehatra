import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        clerkId:{
            type: String,
            unique: true,
            require: true,
        },
        username:{
            type: String,
            unique: true,
            require: true,
        },
        firstname:{
            type: String,
            require: true,
        },
        lastname:{
            type: String,
            require: true,
        },
        email:{
            type: String,
            unique: true,
            require: true,
        },
        photo:{
            type: String,
            require: true,
        },
    }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);