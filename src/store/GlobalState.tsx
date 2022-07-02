/* MODULES */
import { createContext, useEffect, useState} from 'react'
import Router from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies'
// TYPES
import { iContainerProvider, iNotify, iUser } from 'src/@types/globalState';
// SERVICES
import { api } from 'src/services/api';

const DataContext = createContext<any>({});

const ContainerProvider = ({children}: iContainerProvider) => { 
    // THEME
    const [themeStyledGlobal, setThemeStyledGlobal] = useState<string>('dark')

    // ERROR
    const [notify, setNotify] = useState<iNotify | undefined>(undefined);

    // USER
    const [userDateGlobal, setUserDateGlobal] = useState<iUser | null>(null);

    // AUTH
    const isAuthenticated = !!userDateGlobal

    // SIGN IN
    async function signIn(email: string, password: string, setLoadingPage: any) {
        try{
            // LOADING
            setLoadingPage(true)

            await api.post('/auth', {
                body: { "email": email, "password": password },
                headers: { "Content-Type": "application/json" }
            }).then(
                ({ data: {token, user} }) => {
                    // COOKIE
                    setCookie(undefined, 'nextfit-token', token,{
                        maxAge: 86400 // 24 hours
                    })
                    setUserDateGlobal(user)
                    // REDIRECT
                    Router.push('/dashboard')
                }
            ).catch(
                ({response: {data}}) => {
                    // LOADING
                    setNotify({type: data.status, message: data.message})
                    setLoadingPage(false)
                }
            )

        } catch(error){
            setLoadingPage(false)
            setNotify({type: 500, message: 'Erro ao se conectar com servidor'})
        }
    }

    // LOGOUT
    async function logOut() {
        try{
            destroyCookie(undefined, 'nextfit-token')
            setUserDateGlobal(null)
            Router.push('/login')
        } catch(error){
            console.log(error)
        }
    }

    // REGISTER USER
    async function registerUser(user: iUser,password: string, setLoadingPage: any) {
        try{
            // LOADING
            setLoadingPage(true)

            await api.post('/users', {
                body: {
                    "name": user.name,
                    "lastName": user.lastName,
                    "email": user.email,
                    "height": user.height,
                    "weight": user.weight,
                    "sex": user.sex,
                    "password": password
                },
                headers: { "Content-Type": "application/json" }
            }).then(
                ({ data: {token, user} }) => {
                    // COOKIE
                    setCookie(undefined, 'nextfit-token', token,{
                        maxAge: 86400 // 24 hours
                    })
                    setUserDateGlobal(user)
                    // REDIRECT
                    Router.push('/dashboard')
                }
            ).catch(
                ({response: {data}}) => {
                    // LOADING
                    setNotify({type: data.status, message: data.message})
                    setLoadingPage(false)
                }
            )

        } catch(error){
            setLoadingPage(false)
            setNotify({type: 500, message: 'Erro ao se conectar com servidor'})
        }
    }

    // UPDATE INFORMATION USER
    useEffect( () => {
        const { 'nextfit-token': token } = parseCookies()

        if(token){
            api.get(`/users/token`)
            // RESPONSE
            .then(
                ({data})=>{ setUserDateGlobal(data) }
            )
            // ERROR
            .catch( (error) => {
                console.log('Erro ao atualizar perfil: ', error)
            })
        }
    }, [])

    return (
        <DataContext.Provider value={
            {isAuthenticated, notify, userDateGlobal, themeStyledGlobal, setThemeStyledGlobal, signIn, logOut, setNotify, registerUser}}
        >
            {children}
        </DataContext.Provider>
    )
}

export {ContainerProvider, DataContext};