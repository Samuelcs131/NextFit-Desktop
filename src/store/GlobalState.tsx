import axios from 'axios';
import { createContext, useEffect, useReducer, useState} from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router';
 
import {  iContainerProvider, iUser } from 'src/@types/globalState';

const DataContext = createContext<any>({});

const ContainerProvider = ({children}: iContainerProvider) => { 
    
    // THEME
    const [themeStyledGlobal, setThemeStyledGlobal] = useState<string>('dark')

    // USER
    const [userDateGlobal, setUserDateGlobal] = useState<iUser | null>(null);

    // AUTH
    const isAuthenticated = !!userDateGlobal

    // UPDATE INFORMATION USER
    useEffect( () => {
        const { 'nextfit-token': token } = parseCookies()

        if(token){
            axios.get(`https://nextfit-api.herokuapp.com/users/token`, {
                headers: { "Authorization": token }
            })
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

    // SIGN IN
    async function signIn(email: string, password: string) {
        try{
            const { data: {token, user} } = await axios.post('https://nextfit-api.herokuapp.com/auth', {
                body: { "email": email, "password": password },
                headers: { "Content-Type": "application/json" }
            })

            setCookie(undefined, 'nextfit-token', token,{
                maxAge: 86400 // 24 hours
            }) 

            setUserDateGlobal(user)

            Router.push('/dashboard')

        } catch(error){
            console.log(error)
        }
    }

    // LOGOUT
    async function logOut(email: string, password: string) {
        try{

            destroyCookie(undefined, 'nextfit-token')

            setUserDateGlobal(null)

            Router.push('/login')

        } catch(error){
            console.log(error)
        }
    }

    return (
        <DataContext.Provider value={{isAuthenticated, signIn, logOut, userDateGlobal, themeStyledGlobal, setThemeStyledGlobal}}>
            {children}
        </DataContext.Provider>
    )
}

export {ContainerProvider, DataContext};