import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { parseCookies } from "nookies"
import Router from "next/router"
import { ToastContainer } from "react-toastify"
import { GetStaticProps, NextPage } from "next"
// COMPONENTS
import HeadPage from "@components/HeadPage"
import { MenuIcon } from "@components/Icons"
import LoadingPage from "@components/Loading"
import Menu from "@components/Menu"
import TableData from "@components/activity/TableData"
// STYLES
import { ContainerMain } from "@styles/container"
import { Content, TitleAndMenu } from "@styles/layout"
import { Button } from "@styles/buttons"
import 'react-toastify/dist/ReactToastify.min.css'
// TYPES
import { iUser } from "src/@types/globalState"
// GLOBAL STATE
import { DataContext } from "@store/GlobalState"
// SERVICES
import { api } from "@services/api"
import { iDataActivity } from "src/@types/pages"

const Activity: NextPage = () => {
    // LOADING
    const [loading, setLoading] = useState<boolean>(false)

    // DATE USER
    const userDateGlobal: iUser | null = useContext(DataContext).userDateGlobal

    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false)

    // DATA TABLE
    const [tableDataActivity, setTableDataActivity] = useState<iDataActivity[] | undefined>()

    useEffect(()=>{
        // LOADING
        setLoading(true)
        
        // TABLE DATA ACTIVITY
        const fetchData = async () => {
            await api.get(`trainings/user/${userDateGlobal?.id || ''}`).then(
                ({data})=>{
                    setLoading(false)
                    setTableDataActivity(data)
                }
                ).catch( ({response: {data}})=> {
                    setLoading(false)
                    console.log(data)
            })
        }

        if(userDateGlobal){
            fetchData()
        }

        // VERIFY COOKIE AUTH
        const { ['nextfit-token']: token } = parseCookies()
        if(!token){ Router.push('/login') }
 
    }, [userDateGlobal, setLoading])
    
    console.log(tableDataActivity)

    return(<>
        {/* LOADING */}
        {loading === true && <LoadingPage/>}
        {/* NOTIFY */}
        <ToastContainer/>
        {/* HEAD PAGE */}
        <HeadPage titlePage="Atividade"/>
        
        <Content>
            <Menu showMenu={showMenu} setPropsShowMenu={setShowMenu}/>
            <div>
                <ContainerMain>
                    <header>
                        <TitleAndMenu>
                            <span onClick={()=>setShowMenu(!showMenu)}>
                                <MenuIcon/>
                            </span>
                            <h4>Atividades</h4>
                        </TitleAndMenu>
                    </header>
                    <div>
                        <Link href="/activity/newActivity"><Button color="" variant="contained">Nova atividade</Button></Link>

                        {/* TABLE */}
                        <TableData dataAtivity={tableDataActivity} />
                    </div>
                </ContainerMain>
            </div>
        </Content>
    </>)
}

export const getStaticProps: GetStaticProps = (ctx) => {
    
    api.get(`/trainings/user/${''}`)

    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Activity