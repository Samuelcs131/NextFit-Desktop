import axios from 'axios'
import { parseCookies } from 'nookies'

const { ['nextfit-token']: token } = parseCookies()

export const api = axios.create({
    /* baseURL: 'https://nextfit-api.herokuapp.com', */
    baseURL: 'http://localhost:8080',
    headers: { "Authorization": token }
})