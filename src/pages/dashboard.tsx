import HeadPage from "@components/HeadPage"
import Menu from "@components/Menu"
import { DataContext } from "@store/GlobalState"
import { GetServerSideProps, NextPage } from "next"
import { parseCookies } from "nookies"
import { useContext, useState } from "react"
import { iUser } from "src/@types/globalState"

const Dashboard: NextPage = () => {
    const userDateGlobal: iUser | null = useContext(DataContext).userDateGlobal

    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false);
  
    return(<>
    <HeadPage titlePage="Dashboard"></HeadPage>

   

        <Menu showMenu={showMenu} setPropsShowMenu={setShowMenu}/>
        <h1 onClick={()=>setShowMenu(!showMenu)}>Menu</h1>
    
    

    {/* <h1>Home</h1>
    <h1>{userDateGlobal?.id}</h1>
    <h1>{userDateGlobal?.name}</h1>
    <h1>{userDateGlobal?.lastName}</h1>
    <h1>{userDateGlobal?.email}</h1>
    <h1>{userDateGlobal?.height}</h1> */}
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

export default Dashboard