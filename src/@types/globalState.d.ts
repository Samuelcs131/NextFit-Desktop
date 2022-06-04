// VARIABLE GLOBAL
export interface iGlobalState {
    theme: iTheme
}

export interface iTheme {
    themeDefault: string
}

// ACTIONS
export interface iActions {
    type: 'theme',
    payload: iTheme
}

// DATA CONTEXT
export interface iDataContext {
    state: iGlobalState,
    dispatch: Function
}

// CONTAINER PROVIDER
export interface iContainerProvider {
    children: JSX.Element | JSX.Element[]
}