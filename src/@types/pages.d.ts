// LOGIN
export interface iInputFormLogin {
    email?: string
    password?: string
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

// NEW ACTIVITY
export interface iNewActivity {
    exercises: Array<iExercise>
}
export interface iExercise {
    id: string
    muscle: string
    members: string
    name: string
    img: string
}

// RESET PASSWORD
export interface iPassword{
    email: string
    token: string
    passwordResetExpires: Date
    passwordResetToken: string
    dateNow: Date
}
export interface iInputFormResetPassword {
    password?: string
}