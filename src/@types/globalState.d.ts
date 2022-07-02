// VARIABLE GLOBAL
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

// AUTH
export interface iAuthDataUser {
    user: iAuthContext
    token: string
}

export interface iAuthContext{
    id: string
    name: srting
    lastName: string
    email: string
    height: number 
}

// NOTIFY
interface iNotify {
    type: number
    message: string
}