import axios from 'axios'
import { parseCookies } from 'nookies'

const { ['nextfit-token']: token } = parseCookies()

export const api = axios.create({
    baseURL: 'https://nextfit-api.herokuapp.com',
    headers: { "Authorization": token }
})