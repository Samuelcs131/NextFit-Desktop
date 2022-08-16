 
import { GetServerSideProps } from "next" 
import Router from "next/router"
import { GetStaticProps, NextPage } from "next"
import { useContext, useEffect, useState } from "react"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import { InputError } from "@styles/layoutPageInitial"
import Datetime from 'react-datetime'
import Select from "react-select"
import NumberFormat from "react-number-format"
import { parseCookies } from "nookies"
import { ToastContainer } from "react-toastify"
import * as DateFnsPtBR from 'date-fns/locale'
// COMPONENTS
import HeadPage from "@components/HeadPage"
import { MenuIcon } from "@components/Icons"
import LoadingPage from "@components/Loading"
import Menu from "@components/Menu"
import ModalActivity from "@components/new-activity/ModalActivity"
// STYLES
import "react-datetime/css/react-datetime.css"
import 'react-toastify/dist/ReactToastify.min.css'
import { ContainerMain } from "@styles/container"
import { Content, TitleAndMenu } from "@styles/layout"
import { ActivityForm, GroupButtons, SelectActivity, SelectDate, styledSelect } from "@styles/new-activity/newActivity"
import { Button } from "@styles/buttons"
// GLOBAL STATE
import { ThemeContext } from "styled-components" 
import { DataContext } from "@store/GlobalState"
// UTILS
import { yupErrosPtBr } from "@utils/yupErrosPtBr"
// SERVICES
import { api } from "@services/api"
import { typeNotify } from "@services/notify"
// TYPES
import { iExercise, iInputFormNewActivity, iNewActivity } from "src/@types/pages"
import moment, { min } from "moment"
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { TextField, ThemeProvider } from "@mui/material"
import { theme } from "@styles/globalStyle_MaterialUi"

interface iTraining {
    training: {
        createAt: Date
        date: Date
        exercise: string
        id: string
        interval: number
        repetitions: Array<number>
        series: number
        userId: string
        weight: number
        muscle: string
    }
    exercises: iExercise[]
}

const Training = ({ training, exercises }: iTraining): JSX.Element => {

    // GLOBAL STATE
    const { signIn, notify, setNotify, userDateGlobal } = useContext(DataContext)
    const themeContext = useContext(ThemeContext)

    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false)

    // LOADING
    const [loading, setLoading] = useState<boolean>(false)

    // EXERCISE LIST
    const exerciseList = exercises.map( (exercise: any) => {
        return({
            value: exercise.id,
            label: exercise.name
        })
    })

    // SELECT DATE ACTIVITY
    const [selectedDateActivity, setSelectedDateActivity] = useState<Date>(training.date);

    // VALIDATION FORM
    const validationForm = yup.object({
        activity: yup.object().required(),
        date: yup.date().required(),
        series: yup.number().min(1).max(10).integer().required().default(0).typeError('somente númerico'),
        repetitions: yup.string().max(1).max(39).required(),
        weight: yup.number().min(0).max(200).integer().required().default(0).typeError('somente númerico'),
        interval: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico')
    })

    // CUSTOM ERROR
    yup.setLocale(yupErrosPtBr)
  
    // DEFAULT VALUES FORM
    const defaultValues = {
        date: training.date,
        activity: exerciseList[exerciseList.map((props) => props.label).indexOf(training.exercise)],
        repetitions: training.repetitions.join(', '),
        series: training.series,
        interval: training.interval,
        weight: training.weight
    }

    // FORM
    const { watch,control, register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationForm), defaultValues})

    // SUBMIT FORM
    async function onSubmit(data: iInputFormNewActivity){
        const { interval, weight, series, date} = data
        const activity: string = data.activity?.value || ''
        const repetitions: Array<number> | undefined = data.repetitions?.split(',').filter( (value: string) => value.trim() !== '').map( (num: string) => ((Number(num) === NaN) ? 0 : Number(num)))

        // VERIFY ARRAY
        if(repetitions === undefined || repetitions.includes(NaN)){
            setNotify({type: 400, message: 'Campo repetições obrigatório!'})

        // VERIFY ACTIVITY
        } else if(activity === ''){
            setNotify({type: 400, message: 'Escolha uma atividade!'})
            
        // VERIFY LENGTH ACTIVITIES AND SERIES
        } else if(repetitions.length !== series){
            setNotify({type: 400, message: 'O número de repetições não corresponde ao de serie!'})
            
        // VERIFY DATE
        } else if(date === undefined) {
            setNotify({type: 400, message: 'Selecione uma data!'})
            
            // REGISTER ACTIVITY
        } else {
            setLoading(true)
            api.patch(`/trainings/${training.id}`,{
                body: {
                    "exercisesId": activity,
                    "weight": weight,
                    "repetitions": repetitions,
                    "series": series,
                    "date": moment(date).format('DD-MM-YYYY'),
                    "interval": interval
                }
            }).then( ()=>{
                setLoading(false)
                setNotify({type: 200, message: 'Atividade atualizada com sucesso!'})
            }).catch( ({response: {data}}) => {
                // LOADING
                setLoading(false)
                setNotify({type: data.status, message: data.message})
            })
        }
    }
 
    useEffect(()=>{
        // VERIFY COOKIE AUTH
        const { ['nextfit-token']: token } = parseCookies()
        if(!token){ Router.push('/login') }
        
        // NOTIFY
        if(notify !== undefined){
            typeNotify(notify)
            setNotify(undefined)
        }
    })

    return(<>
    {/* LOADING */}
    {loading === true && <LoadingPage/>}
    {/* NOTIFY */}
    <ToastContainer/>
    {/* HEAD PAGE */}
    <HeadPage titlePage="Painel atividade"/>
    <ThemeProvider theme={theme}>
       <Content>
        <Menu showMenu={showMenu} setPropsShowMenu={setShowMenu}/>
        <div>
            <ContainerMain>
                <header>
                    <TitleAndMenu>
                        <span onClick={()=>setShowMenu(!showMenu)}>
                            <MenuIcon/>
                        </span> 
                        <h4>Painel atividade</h4>
                    </TitleAndMenu>
                </header>

                <p>Faça alguma alteração e salve apertando o botão</p>

                <ActivityForm id="form-activity" onSubmit={handleSubmit(onSubmit)}>
               
                        {/* ACTIVITY */}
                        <SelectActivity>
                            <label htmlFor="selectbox">Exercicio</label>
                            <Controller name='activity' control={control} render={({field})=>{
                                return (<Select {...field} options={exerciseList} id="selectbox" instanceId="selectbox"  styles={styledSelect(themeContext)} />)
                            }} />
                        </SelectActivity>

                        {/* SELECTED DATE */}
                        <LocalizationProvider adapterLocale={DateFnsPtBR.ptBR} dateAdapter={AdapterDateFns}>
                            <label htmlFor="date">Data</label> 
                            <Controller
                            control={control}
                            name="date"
                            render={({ field }) => (
                                <MobileDatePicker 
                                    {...field}
                                    value={selectedDateActivity}
                                    onChange={(newValue) => {
                                        field.onChange(newValue)
                                        setSelectedDateActivity(newValue || selectedDateActivity);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                /> 
                            )}/>
                          
                            {errors?.date?.type &&(<InputError>{'é um campo obrigatório'}</InputError>)}
                        </LocalizationProvider>
                        
                        {/* <SelectDate>
                            <Controller name='date' control={control} render={({field: { onChange, value}})=>{
                                return( <Datetime dateFormat="DD/MM/YYYY" timeFormat={false} 
                                onChange={(moment: any)=>{ setSelectedDateActivity(moment._d); return (onChange(moment._d)) }} value={selectedDateActivity}
                               />
                            )}}/>
                        </SelectDate> */}
                   
                        {/* SERIES */}
                        <span>
                            <label htmlFor="series">Series</label>
                            <input type="number" placeholder="4" id="series" {...register('series')}/>
                            {errors?.series?.type &&(<InputError>{errors.series.message}</InputError>)}
                        </span>
                
                        {/* REPETITIONS */}
                        <span>
                            <label htmlFor="repetitions">Repetições</label>
                            <Controller name='repetitions' control={control} render={({field})=>{
                                return <NumberFormat {...field} id="repetitions" format={'##, ##, ##, ##, ##, ##, ##, ##, ##, ##'} mask=" " defaultValue={training.repetitions.join(', ')} placeholder='20, 15, 15, 10'/>
                            }} />
                            {errors?.repetitions?.type &&(<InputError>{errors.repetitions.message}</InputError>)}
                        </span>

                        {/* INTERVAL */}
                        <span>
                            <label htmlFor="interval">Intervalo (segundos)</label>
                            <input type="number" placeholder="120" id="interval" {...register('interval')}/>
                            {errors?.interval?.type &&(<InputError>{errors.interval.message}</InputError>)}
                        </span>

                        {/* WEIGHT */}
                        <span>
                            <label htmlFor="weight">Carga (kg)</label>
                            <input type="number" placeholder="12" id="weight" {...register('weight')}/>
                            {errors?.weight?.type &&(<InputError>{errors.weight.message}</InputError>)}
                        </span>
                </ActivityForm>

                <GroupButtons>
                        {/* BUTTON SUBMIT */}
                        <Button form="form-activity" variant="contained">Salvar alteração</Button>
                        {/* BUTTON BACK */}
                        <Button onClick={()=>Router.push('/activity')}>Voltar</Button>
                </GroupButtons>

                </ContainerMain>
                </div>
        </Content>
    </ThemeProvider>
    </>)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const training = await (await api.get(`/trainings/${ctx.params?.idTraining}`)).data
    const exercises: iExercise = await (await api.get('/exercises')).data

    return {
        props: { training, exercises }
    }
}

export default Training