// VARIABLE GLOBAL
export interface iGlobalState {
    theme: iTheme
}

export interface iTheme {
    themeDefault: string
}

export interface iUser {
    id: string
    name: srting
    lastName: string
    email: string
    height: number
}

// ACTIONS
export type iActions =
    {type: 'theme', payload: iTheme}

// DATA CONTEXT
export interface iDataContext {
    state: iGlobalState,
    dispatch: Function
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

