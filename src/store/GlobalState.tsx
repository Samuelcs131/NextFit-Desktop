/* MODULES */
import axios from 'axios';
import { createContext, useEffect, useState} from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router';

/* INTERNAL MODULES */
import { iContainerProvider, iUser } from 'src/@types/globalState';
import { api } from 'src/services/api';

const DataContext = createContext<any>({});

const ContainerProvider = ({children}: iContainerProvider) => { 
    // THEME
    const [themeStyledGlobal, setThemeStyledGlobal] = useState<string>('dark')

    // USER
    const [userDateGlobal, setUserDateGlobal] = useState<iUser | null>(null);

    // AUTH
    const isAuthenticated = !!userDateGlobal

    // SIGN IN
    async function signIn(email: string, password: string, setLoadingPage: any) {
        try{
            // LOADING
            setLoadingPage(true)

            await axios.post('https://nextfit-api.herokuapp.com/auth', {
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
                (error) => {
                    // LOADING
                    setLoadingPage(false)
                }
            )

        } catch(error){
            setLoadingPage(false)
            console.log('Error ao tentar logar')
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
        <DataContext.Provider value={{isAuthenticated, signIn, logOut, userDateGlobal, themeStyledGlobal, setThemeStyledGlobal}}>
            {children}
        </DataContext.Provider>
    )
}

export {ContainerProvider, DataContext};