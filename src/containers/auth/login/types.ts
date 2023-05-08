export interface ILoginPage {
    email: string,
    password: string,
}

export interface ILoginErrors {
    email: string[],
    password: string[],
    invalid: string[]
}

export interface IUser {
    name: string,
    roles: string,
    image: string
}