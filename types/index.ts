export type CreateUserParams = {
    clerkId: string,
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    photo: string,
}

export type UpdateUserParams = {
    firstname: string,
    lastname: string,
    username: string,
    photo: string,
}

export type CreateEventParams = {
    userId: string,
    event: {
        title: string,
    }
}