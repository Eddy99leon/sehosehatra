"use server"

import { CreateUserParams, UpdateUserParams } from "@/types"
import { connectToDB } from "../database"
import { User } from "../database/models/user.model";
import { Event } from "../database/models/event.model";
import { Order } from "../database/models/order.model";
import { revalidatePath } from "next/cache";

export const createUser = async (user: CreateUserParams) => {
    try{
        await connectToDB();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    }catch (error) {
        console.log(error, "l'utilisateur n'a pas été créer.")
    }
}

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
    try{
        await connectToDB();
        const updateUser = await User.findOneAndUpdate({ clerkId }, user, { new: true });
        if(!updateUser) throw new Error("Utilisateur non trouvé")
        return JSON.parse(JSON.stringify(updateUser));
    }catch (error) {
        console.log(error, "Erreur de mise a jour de l'utilisateur")
    }
}

export const deleteUser = async (clerkId: string) => {
    try{
        await connectToDB();
        const userToDelete = await User.findOne({ clerkId });
        if(!userToDelete) {
            throw new Error('Utilisateur non trouvé!')
        }
        //Unlink relationships
        await Promise.all([
            Event.updateMany(
                { _id: { $in: userToDelete.events }},
                { $pull: { organizer: userToDelete._id}}
            ),
            Order.updateMany(
                { _id: { $in: userToDelete.orders }},
                { $unset: { buyer: 1 }}
            ),
        ])
        //Delete User
        const deleteUser = await User.findByIdAndDelete(userToDelete._id)
        revalidatePath('/')

        return deleteUser ? JSON.parse(JSON.stringify(deleteUser)) : null
    }catch (error) {
        console.log(error, "Erreur de suppression de l'utilisateur.")
    }
}

export const getUserById = async (userId: string) => {
    try{
        await connectToDB();
        const user = await User.findById(userId);
        if(!user) throw new Error("Utilisateur non trouvé")
        return JSON.parse(JSON.stringify(user));
    }catch (error) {
        console.log(error, "Erreur de mise a jour de l'utilisateur")
    }
}