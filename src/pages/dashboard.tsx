/* MODULES */
import { useContext, useState } from "react"
import Image from "next/image"
import { parseCookies } from "nookies"
import { GetServerSideProps, NextPage } from "next"

/* INTERNAL MODULES */
import { iUser } from "src/@types/globalState"
import HeadPage from "@components/HeadPage"
import Menu from "@components/Menu"
import { DataContext } from "@store/GlobalState"
import { ContainerMain } from "@styles/container"
import { Avatar, ContainerInfoUser, Content, Info, NameAndEmail, Profile, TitleAndMenu } from "@styles/dashboard"
import { MenuIcon } from "@components/Icons"
import ChartArea from "@components/dashboard/ChartArea"
import ChartGradient from "@components/dashboard/ChartGradient"


const Dashboard: NextPage = () => {
    const userDateGlobal: iUser | null = useContext(DataContext).userDateGlobal

    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false);
  
 
    return(<>
    <HeadPage titlePage="Dashboard" />

    <Content>
        <Menu showMenu={showMenu} setPropsShowMenu={setShowMenu}/>
        
        <div>
            <ContainerMain>
                <header>
                    <TitleAndMenu>
                        <span onClick={()=>setShowMenu(!showMenu)}>
                            <MenuIcon/>
                        </span> 
                        <h4>Dashboard</h4>
                    </TitleAndMenu>

                    <Profile>
                        <Avatar>
                            <Image src="/img/profile/profile-men.svg" alt='foto de perfil ilustrativa' height={30} width={30} layout="responsive" /> 
                        </Avatar>

                        <NameAndEmail>
                            <span>{userDateGlobal?.name+' '+userDateGlobal?.lastName}</span>
                            <p>{userDateGlobal?.email}</p>
                        </NameAndEmail>
                    </Profile>
                </header>
    
                
                <ContainerInfoUser>
                    <Info><span>Altura</span><p>{userDateGlobal?.height}</p></Info>
                    <Info><span>Peso</span><p>0</p></Info>
                    <Info><span>IMC</span><p>0</p></Info>
                </ContainerInfoUser>

                <ChartArea/>

                <ChartGradient/>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla, itaque libero eos tenetur beatae omnis illum corrupti odio doloremque in quibusdam necessitatibus, eius quam officia. Deserunt, dolorem. Exercitationem, commodi.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla, itaque libero eos tenetur beatae omnis illum corrupti odio doloremque in quibusdam necessitatibus, eius quam officia. Deserunt, dolorem. Exercitationem, commodi.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla, itaque libero eos tenetur beatae omnis illum corrupti odio doloremque in quibusdam necessitatibus, eius quam officia. Deserunt, dolorem. Exercitationem, commodi.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla, itaque libero eos tenetur beatae omnis illum corrupti odio doloremque in quibusdam necessitatibus, eius quam officia. Deserunt, dolorem. Exercitationem, commodi.</p>
                <br />
            </ContainerMain>
        </div>
    </Content>
    </>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { ['nextfit-token']: token } = parseCookies(context)
  
    // VERIFY COOKIE AUTH
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