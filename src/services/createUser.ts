type UserType = {
    name: string;
    email: string;
    password: string;
}

export default function createUser({ name, email, password }: UserType): UserType {
    const user = {
        name,
        email,
        password
    }

    return user
}
