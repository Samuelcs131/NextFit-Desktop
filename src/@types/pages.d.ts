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
// ACTIVITY
export interface iDataActivity {
    createAt: Date
    date: Date
    exercise: string
    id: string
    interval: number
    muscle: string
    repetitions: Array<number>
    series: number
    weight: number
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
export interface iInputFormNewActivity{
    activity?: { label?: string, value?: string}
    date?: any
    interval?: number
    repetitions?: string
    series?: number
    weight?: number
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