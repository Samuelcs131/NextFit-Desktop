import Router from "next/router"
import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import { parseCookies } from "nookies"
import { GetStaticProps, NextPage } from "next"
import dynamic from 'next/dynamic'  
import { ThemeContext } from "styled-components"
import Link from "next/link"
// COMPONENTS
const ReactApexChart: any = dynamic( () => import('react-apexcharts'),{ ssr: false })
import HeadPage from "@components/HeadPage"
import Menu from "@components/Menu"
import { MenuIcon } from "@components/Icons"
import ChartArea from "@components/dashboard/ChartArea"
import ChartGradient from "@components/dashboard/ChartGradient"
import ChartRadar from "@components/dashboard/ChartRadar"
import { themeApexChartArea, themeApexChartGradient, themeApexChartRadar } from "@components/dashboard/config/apexChart"
// STYLES
import { ContainerMain } from "@styles/container"
import { Avatar, ContainerInfoUser, Content, Info, NameAndEmail, Profile, TitleAndMenu, WrapperCharts } from "@styles/dashboard"
// TYPES
import { iUser } from "src/@types/globalState"
import { iActivityListSelected, iMeasurementData } from "src/@types/components"
// GLOBAL STATE
import { DataContext } from "@store/GlobalState"
import LoadingPage from "@components/Loading"
import { iExercise } from "src/@types/pages"
import { api } from "@services/api"
import moment from "moment"

interface iDashboard {
    exercises: iExercise[]
}

const Dashboard: NextPage<iDashboard> = ({exercises}) => {
    // LOADING
    const [loading, setLoading] = useState<boolean>(false);
 
    // EXERCISE LIST
    const exerciseList: iActivityListSelected[] = exercises?.map( (exercise: any) => {
        return({
            value: exercise.id,
            label: exercise.name
        })
    }) || []

    // ACTIVITY
    const [selectdDateActivity, setSelectdDateActivity] = useState<Date>(new Date());
    const [chosenExercise, setChosenExercise] = useState<string | undefined>(exerciseList[0].label);
    // DATA CHART AREA
    const [seriesAreaData, setSeriesAreaData] = useState<Array<any>>()
    const seriesArea = [
        {
            name: 'Series',
            data: seriesAreaData?.filter( (activity: any) => activity.exercise === chosenExercise ).map( (activity: any) => activity.series ) || []
        }, {
            name: 'Repetições',
            data: seriesAreaData?.filter( (activity: any) => activity.exercise === chosenExercise ).map( (activity: any) => activity.repetitions ) || []
        }, {
            name: 'Peso',
            data: seriesAreaData?.filter( (activity: any) => activity.exercise === chosenExercise ).map( (activity: any) => activity.weight ) || []
        }, 
        {
            name: 'Intervalo',
            data: seriesAreaData?.filter( (activity: any) => activity.exercise === chosenExercise ).map( (activity: any) => activity.interval ) || []
        }
    ]
    const categories: string[] | undefined = seriesAreaData?.filter( (activity: any) => activity.exercise === chosenExercise ).map( (activity: any) => activity.date )

    // DATA CHART RADAR
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
    
    // PHOTO USER
    const photoUser = userDateGlobal?.sex === 'm' ? 'profile-men.svg' : 'profile-women.svg'

    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false);
  
    // VARIABLES GLOBAL
    const { themeStyledGlobal } = useContext(DataContext)
    const themeContext = useContext(ThemeContext)
 
    // IMC 
    const IMCdata: number = userDateGlobal?.height ? Number((userDateGlobal?.weight / (((userDateGlobal?.height)/100) * 2)).toFixed(2)) : 0

    // MEASUREMENTS
    const [selectdDateMeasurements, setSelectdDateMeasurements] = useState<Date>(new Date());
    const [measurementData, setMeasurementData] = useState<Array<iMeasurementData>>(seriesRadar);

    useEffect(()=>{

        // LOADING
        setLoading(true)
        if(userDateGlobal){
            setLoading(false)
            
            // GET DATA 
            api.get(`/trainings/user/${userDateGlobal?.id}/${moment(selectdDateActivity).format('MM-YYYY')}`)
            .then( ({data})=> { 
                setSeriesAreaData(data.map( (activity: any) => { return { 
                    interval: activity.interval,
                    date: activity.date,
                    exercise: activity.exercise,
                    series: activity.series,
                    repetitions: activity.repetitions.reduce((valueInitial: number, value: number) => valueInitial + value) / Number(activity.repetitions.length),
                    weight: activity.weight,
                }}))
            }).catch( (error) => console.log(error))
        } 

        // VERIFY COOKIE AUTH
        const { ['nextfit-token']: token } = parseCookies()
        if(!token){ Router.push('/login') }
    },[userDateGlobal, selectdDateActivity])

    return(<>
    {/* LOADING */}
    {loading === true && <LoadingPage/>}
    {/* HEAD PAGE */}
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
                            <Link href={'/profile'}>
                                <a>
                                <Image src={`/img/profile/${photoUser}`} alt='foto de perfil ilustrativa' height={30} width={30} layout="responsive" /></a>
                            </Link>
                        </Avatar>

                        <NameAndEmail>
                            <span>{userDateGlobal?.name+' '+userDateGlobal?.lastName}</span>
                            <p>{userDateGlobal?.email}</p>
                        </NameAndEmail>
                    </Profile>
                </header>
    
                
                <ContainerInfoUser>
                    <Info><span>Altura</span><p>{userDateGlobal?.height}</p></Info>
                    <Info><span>Peso</span><p>{userDateGlobal?.weight}</p></Info>
                    <Info><span>IMC</span><p>{IMCdata}</p></Info>
                </ContainerInfoUser>

                <ChartArea exerciseList={exerciseList} dateActivity={selectdDateActivity} setDateActivity={setSelectdDateActivity} setChosenExercise={setChosenExercise} >
                    <ReactApexChart options={themeApexChartArea(themeContext, themeStyledGlobal, categories || [])} series={seriesArea} type="area" width="100%" height="400px" />
                </ChartArea>

                <WrapperCharts>
                    <ChartGradient>
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

export const getStaticProps: GetStaticProps = async (ctx) => {
    const exercises: iExercise = await (await api.get('/exercises')).data
    return {
        props: { exercises }
    }
}

export default Dashboard