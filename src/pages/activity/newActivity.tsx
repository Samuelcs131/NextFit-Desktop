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


const NewActivity: NextPage<iNewActivity> = ( { exercises } ) => {
    // GLOBAL STATE
    const { signIn, notify, setNotify, userDateGlobal } = useContext(DataContext)

    // GLOBAL STATE
    const themeContext = useContext(ThemeContext)
    
    // LOADING
    const [loading, setLoading] = useState<boolean>(false)
    
    // EXERCISE LIST
    const exerciseList = exercises.map( (exercise: any) => {
        return({
            value: exercise.id,
            label: exercise.name
        })
    })

    // DEFAULT VALUES FORM
    const defaultValues = {
        date: new Date(),
        activity: exerciseList[0],
        repetitions: '',
        series: 0,
        interval: 0,
        weight: 0
    }

    // ACTIVE MODAL
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [activeBottunModal, setActiveBottunModal] = useState<boolean>(false)

    // SELECT ACTIVITY
    const [chosenExercise, setChosenExercise] = useState<string>()

    // SELECT DATE ACTIVITY
    const [selectedDateActivity, setSelectedDateActivity] = useState<Date>(new Date());

    // DATA ACTIVITY
    const [maxSeries, setMaxSeries] = useState<number>(0)
    const [repetitions, setRepetitions] = useState<number>(0)
    const [secondsInterval, setSecondsInterval] = useState<number>(0)
  
    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false)
 
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

    // FORM
    const { watch, getValues, control, register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationForm), defaultValues})

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
            api.post(`/trainings/${userDateGlobal?.id}`,{
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
                setNotify({type: 200, message: 'Atividade cadastrada com sucesso!'})
            }).catch( ({response: {data}}) => {
                // LOADING
                setLoading(false)
                setNotify({type: data.status, message: data.message})
            })
        }
    }

    // ACTIVE MODAL ACTIVITIES
    function activeModalActivies(){
        let repetitionsModal: number = Number((getValues('repetitions') || '').split(',')[0])
        setActiveModal(true)
        setMaxSeries(getValues('series') || 0)
        setRepetitions(repetitionsModal || 0)
        setSecondsInterval(getValues('interval') || 0)
    }

    // VERIFY INPUTS MODAL ACTIVITY
    function verifyInputsModal() {
        let repetitionsModal: number = Number((watch(['repetitions'])[0] || '').split(',')[0])
        let seriesMaxModal: number = Number(watch(['series'])[0] || 0)
        let secondsIntervalModal: number = Number(watch(['interval'])[0] || 0)
        let activityModalId: string = watch('activity')?.value || ''
        let activityModalImg: string = exercises.find( (exercise) => exercise.id === activityModalId)?.img || ''

        const inputs = [repetitionsModal, seriesMaxModal, secondsIntervalModal, activityModalImg]

        if(!inputs.includes(0) && !inputs.includes('')){
            setActiveBottunModal(true)
            setChosenExercise(activityModalImg)
        } else {
            setActiveBottunModal(false)
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

        // VERIFY INPUTS MODAL
        verifyInputsModal()
    })

    return(<>
    {/* LOADING */}
    {loading === true && <LoadingPage/>}
    {/* NOTIFY */}
    <ToastContainer/>
    {/* HEAD PAGE */}
    <HeadPage titlePage="Atividade"/>
    {/* MODAL ACTIVITY */}
    {activeModal && <ModalActivity options={{setActiveModal, maxSeries, repetitions, secondsInterval, chosenExercise}} />}

    <Content>
        <Menu showMenu={showMenu} setPropsShowMenu={setShowMenu}/>
        <div>
            <ContainerMain>
                <header>
                    <TitleAndMenu>
                        <span onClick={()=>setShowMenu(!showMenu)}>
                            <MenuIcon/>
                        </span> 
                        <h4>Nova atividade</h4>
                    </TitleAndMenu>
                </header>

                <p>Para realizar um exercicio basta preencher os campos abaixo e clicar em iniciar! o numero de repetições será com base no primeiro.</p>

                <ActivityForm id="form-activity" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {/* ACTIVITY */}
                        <SelectActivity>
                            <label htmlFor="selectbox">Exercicio</label>
                            <Controller name='activity' control={control} render={({field})=>{
                                return (<Select {...field} options={exerciseList} id="selectbox" instanceId="selectbox"  styles={styledSelect(themeContext)} />)
                            }} />
                            {/* {errors?.activity?.type &&(<InputError>{errors.activity.message}</InputError>)} */}
                        </SelectActivity>

                        {/* SELECTED DATE */}
                        <SelectDate>
                            <label htmlFor="date">Data</label>
                            <Controller name='date' control={control} render={({field: { onChange, value}})=>{
                                return( <Datetime dateFormat="DD/MM/YYYY" timeFormat={false} 
                                onChange={(moment: any)=>{ setSelectedDateActivity(moment._d); return (onChange(moment._d)) }} value={selectedDateActivity}
                               />
                            )}}/>
                            {errors?.date?.type &&(<InputError>{'é um campo obrigatório'}</InputError>)}
                        </SelectDate>
                    </div>
                        <span>
                            {/* SERIES */}
                            <label htmlFor="series">Series</label>
                            <input type="number" placeholder="4" id="series" {...register('series')}/>
                            {errors?.series?.type &&(<InputError>{errors.series.message}</InputError>)}
                        </span>
                    <div>
                        <span>
                            {/* REPETITIONS */}
                            <label htmlFor="repetitions">Repetições</label>
                            <Controller name='repetitions' control={control} render={({field})=>{
                                return <NumberFormat {...field} id="repetitions" format={'##, ##, ##, ## , ##, ##, ##, ##, ##, ##'} mask=" " placeholder='20, 15, 15, 10'/>
                            }} />
                            {errors?.repetitions?.type &&(<InputError>{errors.repetitions.message}</InputError>)}
                        </span>
                        <span>
                            {/* INTERVAL */}
                            <label htmlFor="interval">Intervalo (segundos)</label>
                            <input type="number" placeholder="120" id="interval" {...register('interval')}/>
                            {errors?.interval?.type &&(<InputError>{errors.interval.message}</InputError>)}
                        </span>
                    </div>
                    <span>
                        {/* WEIGHT */}
                        <label htmlFor="weight">Carga (kg)</label>
                        <input type="number" placeholder="12" id="weight" {...register('weight')}/>
                        {errors?.weight?.type &&(<InputError>{errors.weight.message}</InputError>)}
                    </span>

                </ActivityForm>
                    <GroupButtons>
                        {/* BUTTON ACTIVITY */}
                        <Button onClick={()=>activeModalActivies()} variant="contained" color="quaternary" disabled={!activeBottunModal}>Iniciar treino</Button>
                        {/* BUTTON SUBMIT */}
                        <Button form="form-activity" variant="contained">Salvar treino</Button>
                    </GroupButtons>
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

export default NewActivity
