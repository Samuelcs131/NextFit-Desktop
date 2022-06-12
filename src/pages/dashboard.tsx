import { useContext, useState } from "react"
import { parseCookies } from "nookies"
import { GetServerSideProps, NextPage } from "next"
import HeadPage from "@components/HeadPage"
import Menu from "@components/Menu"
import { DataContext } from "@store/GlobalState"
import { ContainerMain } from "@styles/container"
import { Avatar, Content, Profile } from "@styles/dashboard"
import { iUser } from "src/@types/globalState"
import { MenuIcon } from "@components/Icons"

const Dashboard: NextPage = () => {
    const userDateGlobal: iUser | null = useContext(DataContext).userDateGlobal

    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false);
  
    return(<>
    <HeadPage titlePage="Dashboard" />

    <Content>
        <Menu showMenu={showMenu} setPropsShowMenu={setShowMenu}/>
        
        <ContainerMain>
            <div>

            <header>
                <div>
                    <span onClick={()=>setShowMenu(!showMenu)}>
                        <MenuIcon />
                    </span>
                    <h1>Dashboard</h1>
                </div>

                <Profile>
                    <Avatar/>
                    <span>{userDateGlobal?.name+' '+userDateGlobal?.lastName}</span>
                    <p>{userDateGlobal?.email}</p>
                </Profile>
            </header>
            </div>

        </ContainerMain>
    </Content>

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