import { DataContext } from "@store/GlobalState"
import { GetServerSideProps, NextPage } from "next"
import { parseCookies } from "nookies"
import { useContext } from "react"
import { iUser } from "src/@types/globalState"

const Home: NextPage = () => {
    const userDateGlobal: iUser | null = useContext(DataContext).userDateGlobal
    return(<>
    <h1>Home</h1>
    <h1>{userDateGlobal?.id}</h1>
    <h1>{userDateGlobal?.name}</h1>
    <h1>{userDateGlobal?.lastName}</h1>
    <h1>{userDateGlobal?.email}</h1>
    <h1>{userDateGlobal?.height}</h1>
    </>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { ['nextfit-token']: token } = parseCookies(context)
  
    if(!token){
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return{
        props: {}
    }
}

export default Home