import { NextPage } from "next"
import { useContext, useEffect, useState } from "react"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import { InputError } from "@styles/layoutPageInitial"
import Datetime from 'react-datetime'
import Select from "react-select"
import NumberFormat from "react-number-format"
// COMPONENTS
import HeadPage from "@components/HeadPage"
import { MenuIcon } from "@components/Icons"
import LoadingPage from "@components/Loading"
import Menu from "@components/Menu"
// STYLES
import "react-datetime/css/react-datetime.css"
import { ContainerMain } from "@styles/container"
import { Content, TitleAndMenu } from "@styles/layout"
// GLOBAL STATE
import { ThemeContext } from "styled-components" 
// UTILS
import { yupErrosPtBr } from "@utils/yupErrosPtBr"
import { ActivityForm, GroupButtons, SelectActivity, SelectDate, styledSelect } from "@styles/new-activity/newActivity"
import { Button } from "@styles/buttons"
import ModalActivity from "@components/new-activity/ModalActivity"

const NewActivity: NextPage = () => {
    // DATA
    const exerciseList1 = [
        { value: 'Supino', label: 'Supino' },
        { value: 'Rosca direta', label: 'Rosca direta' },
        { value: 'Voador', label: 'Voador' },
        { value: 'Desenvolvimento', label: 'Desenvolvimento' },
        { value: 'Remada unilateral', label: 'Remada unilateral' },
        { value: 'Costas', label: 'Costas' },
        { value: 'Triceps puxador', label: 'Triceps puxador' },
    ]

    // LOADING
    const [loading, setLoading] = useState<boolean>(false)
    
    // GLOBAL STATE
    const themeContext = useContext(ThemeContext)

    // ACTIVE MODAL
    const [activeModal, setActiveModal] = useState<boolean>(false)

    // SELECT DATE
    const [dateActivity, setDateActivity] =  useState<Date>(new Date())
    
    // DATA ACTIVITY
    const [seriesMax, setSeriesMax] = useState<number>(0)
    const [repetitions, setRepetitions] = useState<number>(0)
    const [secondsInterval, setSecondsInterval] = useState<number>(0)
  
    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false)

    // VALIDATION FORM
    const validationForm = yup.object({
        series: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico'),
        repetitions: yup.string().required(),
        weight: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico'),
        interval: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico')
    }) 
    
    // CUSTOM ERROR
    yup.setLocale(yupErrosPtBr)

    // SELECT ACTIVITY
    const [chosenExercise, setChosenExercise] = useState<string>()

    // FORM
    const { getValues, control, register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationForm)})

    // SUBMIT FORM
    async function onSubmit(data: any){
        console.log(data) 
    }

    // ACTIVE MODAL ACTIVITIES
    function activeModalActivies(){
        let repetitions: number = Number((getValues('repetitions') || '').split(',')[0])
        setActiveModal(true)
        setSeriesMax(getValues('series') || 0)
        setRepetitions(repetitions || 0)
        setSecondsInterval(getValues('interval') || 0)
    }

    return(<>
    {/* LOADING */}
    {loading === true && <LoadingPage/>}
    {/* HEAD PAGE */}
    <HeadPage titlePage="Atividade"/>
    {/* MODAL ACTIVITY */}
    {activeModal && <ModalActivity activeModal={setActiveModal} maxSeries={seriesMax} repetitions={repetitions} secondsInterval={secondsInterval} />}

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
                             <Select options={exerciseList1} id="selectbox" instanceId="selectbox" styles={styledSelect(themeContext)} defaultValue={exerciseList1[0]} onChange={(exercise)=>setChosenExercise(exercise?.label)} />
                        </SelectActivity>

                        {/* SELECTED DATE */}
                        <SelectDate>
                            <label htmlFor="">Data</label>
                            <Datetime dateFormat="DD/MM/YYYY" value={dateActivity} timeFormat={false} 
                             onChange={({_d}: any)=>setDateActivity(_d)} />
                        </SelectDate>
                    </div>
                        {/* SERIES */}
                        <span>
                            <label htmlFor="series">Series</label>
                            <input type="text" placeholder="4" id="series" {...register('series')}/>
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
                        {/* INTERVAL */}
                        <span>
                            <label htmlFor="interval">Intervalo (segundos)</label>
                            <input type="number" placeholder="120" id="interval" {...register('interval')}/>
                            {errors?.interval?.type &&(<InputError>{errors.interval.message}</InputError>)}
                        </span>
                    </div>
                    {/* WEIGHT */}
                    <span>
                        <label htmlFor="weight">Carga (kg)</label>
                        <input type="number" placeholder="12" id="weight" {...register('weight')}/>
                        {errors?.weight?.type &&(<InputError>{errors.weight.message}</InputError>)}
                    </span>

                </ActivityForm>
                    <GroupButtons>
                        {/* BUTTON ACTIVITY */}
                        <Button onClick={()=>activeModalActivies()} variant="contained" color="quaternary">Iniciar treino</Button>
                        {/* BUTTON SUBMIT */}
                        <Button form="form-activity" variant="contained">Salvar treino</Button>
                    </GroupButtons>
            </ContainerMain>
            
        </div>
    </Content>
    </>)
}

export default NewActivity