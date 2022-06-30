/* MODULES */
import { useContext, useState } from "react"
import Image from "next/image"
import { parseCookies } from "nookies"
import { GetServerSideProps, NextPage } from "next"
import dynamic from 'next/dynamic'  
const ReactApexChart: any = dynamic( () => import('react-apexcharts'),{ ssr: false })


/* INTERNAL MODULES */
import { iUser } from "src/@types/globalState"
import HeadPage from "@components/HeadPage"
import Menu from "@components/Menu"
import { DataContext } from "@store/GlobalState"
import { ContainerMain } from "@styles/container"
import { Avatar, ContainerInfoUser, Content, Info, NameAndEmail, Profile, TitleAndMenu, WrapperCharts } from "@styles/dashboard"
import { MenuIcon } from "@components/Icons"
import ChartArea from "@components/dashboard/ChartArea"
import ChartGradient from "@components/dashboard/ChartGradient"
import { themeApexChartArea, themeApexChartGradient, themeApexChartRadar } from "@components/dashboard/config/apexChart"
import { ThemeContext } from "styled-components"
import ChartRadar from "@components/dashboard/ChartRadar"
import { iActivityListSelected, iMeasurementData } from "src/@types/components"


const Dashboard: NextPage = () => {

    // DATE
    const exerciseList1: Array<iActivityListSelected> = [
        { value: 'Supino', label: 'Supino' },
        { value: 'Rosca direta', label: 'Rosca direta' },
        { value: 'Voador', label: 'Voador' },
        { value: 'Desenvolvimento', label: 'Desenvolvimento' },
        { value: 'Remada unilateral', label: 'Remada unilateral' },
        { value: 'Costas', label: 'Costas' },
        { value: 'Triceps puxador', label: 'Triceps puxador' },
    ]
    const seriesArea = [
        {
            name: 'Series',
            data: [31, 40, 28, 31, 42, 29, 45],
        }, {
            name: 'Repetições',
            data: [61, 52, 75, 52, 44, 52, 31]
        }, {
            name: 'Peso',
            data: [71, 82, 65, 72, 84, 62, 71]
        }
    ]
    const seriesRadar = [
        {
            name: '7 - fev',
            data: [60, 10, 70, 50, 60, 30],
        },
        {
            name: '10 - fev',
            data: [10, 50, 20, 70, 80, 90],
        },
        {
            name: '15 - fev',
            data: [20, 70, 40, 20, 90, 50],
        }
    ]
    const nameCategories = ['deltóide/ombros', 'braço direito', 'antebraço direito', 'peitoral e dorsal', 'antebraço esquerdo ', 'braço esquerdo']

    // DATE USER
    const userDateGlobal: iUser | null = useContext(DataContext).userDateGlobal
    
    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false);
  
    // VARIABLES GLOBAL
    const {themeStyledGlobal } = useContext(DataContext)
    const themeContext = useContext(ThemeContext)

    // ACTIVITY
    const [selectdDateActivity, setSelectdDateActivity] = useState<Date>(new Date());
    const [activityListSelected, setActivityListSelected] = useState<Array<iActivityListSelected>>(exerciseList1);
    const [chosenExercise, setChosenExercise] = useState<string>();
    
    // IMC
    const [selectdDateIMC, setSelectdDateIMC] = useState<Date>(new Date());
    const IMCdata: number = userDateGlobal?.height ? Number((50 / (((userDateGlobal?.height)/100) * 2)).toFixed(2)) : 0

    // MEASUREMENTS
    const [selectdDateMeasurements, setSelectdDateMeasurements] = useState<Date>(new Date());
    const [measurementData, setMeasurementData] = useState<Array<iMeasurementData>>(seriesRadar);
 

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

                <ChartArea exerciseList={activityListSelected} dateActivity={selectdDateActivity} setDateActivity={setSelectdDateActivity} setChosenExercise={setChosenExercise} >
                    <ReactApexChart options={themeApexChartArea(themeContext, themeStyledGlobal)} series={seriesArea} type="area" width="100%" height="400px" />
                </ChartArea>

                <WrapperCharts>
                    <ChartGradient dateIMC={selectdDateIMC} setdDateIMC={setSelectdDateIMC}>
                        <ReactApexChart options={themeApexChartGradient(themeContext)} series={[IMCdata]} type="radialBar" width="100%" height="400px"/>
                    </ChartGradient>

                    <ChartRadar dateMeasurements={selectdDateMeasurements} setDateMeasurements={setSelectdDateMeasurements}>
                        <ReactApexChart options={themeApexChartRadar(themeContext,themeStyledGlobal, nameCategories)} series={measurementData} type="radar" width="100%" height="400px"/>
                    </ChartRadar>
                </WrapperCharts>



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