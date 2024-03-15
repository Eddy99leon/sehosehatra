import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export interface IOrder extends Document {
    createdAt: string;
    stripeId: string;
    totalAmount: string;
    event: {
        _id: string,
        title: string,
    };
    buyer: {
        _id: String,
        firstname: String,
        lastname: String,
    }
}

const orderSchema = new Schema(
    {
        createdAt:{
            type: Date,
            default: Date.now,
        },
        stripeId:{
            type: String,
            require: true,
            unique: true,
        },
        totalAmount:{
            type: String,
        },
        event:{
            type: Schema.Types.ObjectId,
            ref: 'Event',
        },
        buyer:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    }
);

export const Order = mongoose.models?.Order || mongoose.model("Order", orderSchema);