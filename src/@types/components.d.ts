export interface iLayout {
    children: JSX.Element | JSX.Element[]
}
 
export interface iHeadPage {
    titlePage: string
}

export interface iPassword{
    email: string
    token: string
    passwordResetExpires: Date
    passwordResetToken: string
    dateNow: Date
}