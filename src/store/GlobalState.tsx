import axios from 'axios';
import { createContext, useEffect, useReducer, useState} from 'react'
import { setCookie, parseCookies } from 'nookies'
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
            axios.get(`http://localhost:8080/users/token`, {
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

    async function signIn(email: string, password: string) {
        try{
            const { data: {token, user} } = await axios.post('http://localhost:8080/auth', {
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

    return (
        <DataContext.Provider value={{isAuthenticated, signIn, userDateGlobal, themeStyledGlobal, setThemeStyledGlobal}}>
            {children}
        </DataContext.Provider>
    )
}

export {ContainerProvider, DataContext};