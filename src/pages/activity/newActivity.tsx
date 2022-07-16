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
// COMPONENTS
import HeadPage from "@components/HeadPage"
import { MenuIcon } from "@components/Icons"
import LoadingPage from "@components/Loading"
import Menu from "@components/Menu"
import ModalActivity from "@components/new-activity/ModalActivity"
// STYLES
import "react-datetime/css/react-datetime.css"
import { ContainerMain } from "@styles/container"
import { Content, TitleAndMenu } from "@styles/layout"
import { ActivityForm, GroupButtons, SelectActivity, SelectDate, styledSelect } from "@styles/new-activity/newActivity"
import { Button } from "@styles/buttons"
// GLOBAL STATE
import { ThemeContext } from "styled-components" 
// UTILS
import { yupErrosPtBr } from "@utils/yupErrosPtBr"
// SERVICES
import { api } from "@services/api"
// TYPES
import { iExercise, iNewActivity } from "src/@types/pages"


const NewActivity: NextPage<iNewActivity> = ( { exercises } ) => {
    // DATA
    const exerciseList = exercises.map( (exercise: any) => {
        return({
            value: exercise.id,
            label: exercise.name
        })
    })

    // LOADING
    const [loading, setLoading] = useState<boolean>(false)
    
    // GLOBAL STATE
    const themeContext = useContext(ThemeContext)

    // ACTIVE MODAL
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [activeBottunModal, setActiveBottunModal] = useState<boolean>(false)

    // SELECT DATE
    const [seletedDateActivity, setSelectedDateActivity] =  useState<Date>(new Date())

    // SELECT ACTIVITY
    const [chosenExercise, setChosenExercise] = useState<string>()

    // DATA ACTIVITY
    const [maxSeries, setMaxSeries] = useState<number>(0)
    const [repetitions, setRepetitions] = useState<number>(0)
    const [secondsInterval, setSecondsInterval] = useState<number>(0)
  
    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false)

    // VALIDATION FORM
    const validationForm = yup.object({
        activity: yup.object().required(), 
        series: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico'),
        repetitions: yup.string().required(),
        weight: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico'),
        interval: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico')
    }) 
    
    // CUSTOM ERROR
    yup.setLocale(yupErrosPtBr)


    // FORM
    const { watch, getValues, control, register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationForm)})

    // SUBMIT FORM
    async function onSubmit(data: any){
        console.log(data)
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
        // VERIFY INPUTS MODAL
        verifyInputsModal()
 
        // VERIFY COOKIE AUTH
        const { ['nextfit-token']: token } = parseCookies()
        if(!token){ Router.push('/login') }
    })

    return(<>
    {/* LOADING */}
    {loading === true && <LoadingPage/>}
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
                            {errors?.activity?.type &&(<InputError>{errors.activity.message}</InputError>)}
                        </SelectActivity>

                        {/* SELECTED DATE */}
                        <SelectDate>
                            <label htmlFor="date">Data</label>
                           <Datetime dateFormat="DD/MM/YYYY" value={seletedDateActivity} timeFormat={false} 
                                onChange={({_d}: any)=>setSelectedDateActivity(_d)} /> 
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
                                return <NumberFormat  {...field} id="repetitions" format="##, ##, ##, ##" mask="_" placeholder='20, 15, 15, 10'/>
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
