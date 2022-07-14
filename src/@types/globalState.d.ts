import { iInputFormRegister } from "./pages"

// DATA CONTEXT
interface iDataContext {
    isAuthenticated: boolean
    notify: iNotify | undefined
    userDateGlobal: iUser| null
    themeStyledGlobal: string
    setThemeStyledGlobal: (theme: string) => void
    signIn: (email: string, password: string, setLoadingPage: any) => void
    logOut: () => void
    setNotify: (notify: iNotify | undefined) => void
    registerUser: (user: iInputFormRegister ,password?: string, setLoadingPage: any) => void
}

// USER
export interface iUser {
    id: string
    name: srting
    lastName: string
    email: string
    height: number
    weight: number
    sex: string
}

// CONTAINER PROVIDER
export interface iContainerProvider {
    children: JSX.Element | JSX.Element[]
}

// NOTIFY
interface iNotify {
    type: number
    message: string
}