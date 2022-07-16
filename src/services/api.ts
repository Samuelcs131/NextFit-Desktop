import axios from 'axios'
import { parseCookies } from 'nookies'

const { ['nextfit-token']: token } = parseCookies()

export const api = axios.create({
    /* baseURL: 'http://localhost:8080', */
    baseURL: 'https://nextfit-api.herokuapp.com',
    headers: { 
        "Authorization": token || '', 
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin" : 'http://localhost:3000',
        /* "AuthClientServer": tokenAuth */
    }
})