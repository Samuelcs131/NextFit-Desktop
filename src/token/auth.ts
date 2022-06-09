import {hash} from 'bcrypt'
 
export const keyApiAuth = async (key: string) => {
  return hash(key, 20)
}