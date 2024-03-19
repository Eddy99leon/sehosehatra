import mongoose from "mongoose";

let cached = (global as any).mongoose || { con: null, promise: null };

const MONGO_URL = process.env.MONGOBD_URL

export const connectToDB =async () => {
    if (cached.conn) return cached.conn;

    if(!MONGO_URL) throw new Error("MONGODB_URL is missing!")

    cached.promise = cached.promise || mongoose.connect(MONGO_URL, {
        dbName: 'sehatra',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}