// LOGIN
export interface iInputFormLogin {
    email?: string | undefined
    password?: string | undefined
}

// REGISTER
export interface iInputFormRegister {
    name?: string
    lastName?: string
    email?: string
    sex?: string
    height?: number
    weight?: number
    password?: string
    passwordRepeat?: string
}