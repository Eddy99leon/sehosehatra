import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export interface IEvent extends Document {
    _id: object; // Mongoose adds this internally as a document ID
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDate: Date;
    endDate: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: {
        _id: String,
        name: String,
    };
    organizer: {
        _id: String,
        firstname: String,
        lastname: String,
    };
}

const eventSchema = new Schema(
    {
        title:{
            type: String,
            require: true,
        },
        description:{
            type: String,
        },
        location:{
            type: String,
        },
        createdAt:{
            type: Date,
            default: Date.now,
        },
        imageUrl:{
            type: String,
            require: true,
        },
        startDate:{
            type: Date,
            default: Date.now,
        },
        endDate:{
            type: Date,
            default: Date.now,
        },
        Price:{
            type: String,
        },
        isFree:{
            type: Boolean,
            default: false,
        },
        url:{
            type: String,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        Organizer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    }
);

export const Event = mongoose.models?.Event || mongoose.model("Event", eventSchema);