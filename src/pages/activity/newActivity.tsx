import { NextPage } from "next"
import { useContext, useEffect, useState } from "react"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { InputError } from "@styles/layoutPageInitial"
import Datetime from 'react-datetime'
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
import Select from "react-select"
import { themeSelect } from "@components/dashboard/config/select"
import { iActivityListSelected } from "src/@types/components"
import NumberFormat from "react-number-format"
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
    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false)

    // VALIDATION FORM
    const validationForm = yup.object({
        name: yup.string().min(4).max(16).required().default('robertin'),
        lastName: yup.string().min(4).max(16).required(),
        email: yup.string().email().max(50).required(),
        height: yup.number().min(1).max(300).integer().required().default(0).typeError('somente númerico'),
        weight: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico')
    }) 
    
    // CUSTOM ERROR
    yup.setLocale(yupErrosPtBr)

    // SELECT ACTIVITY
    const [chosenExercise, setChosenExercise] = useState<string>()

    // FORM
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationForm)})

    // SUBMIT FORM
    async function onSubmit(data: any){
        console.log(data) 
    }

 
    return(<>
    {/* LOADING */}
    {loading === true && <LoadingPage/>}
    {/* HEAD PAGE */}
    <HeadPage titlePage="Atividade"/>
    {/* MODAL ACTIVITY */}
    {activeModal && <ModalActivity activeModal={setActiveModal} maxSeries={4} repetitions={15} secondsInterval={90} />}

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
                             onChange={({_d}: any)=>setDateActivity(_d)}  />
                        </SelectDate>
                    </div>
                        {/* SERIES */}
                        <span>
                            <label htmlFor="series">Series</label>
                            <input type="text" placeholder="4" id="series" {...register('series')}/>
                        </span>
                    <div>
                        {/* REPETITIONS */}
                        <span>
                            <label htmlFor="repetitions">Repetições</label>
                            <NumberFormat id="repetitions" format="##, ##, ##, ##" mask="_" placeholder='20, 15, 15, 10'  {...register('repetitions')}/>
                        </span>
                        {/* WEIGHT */}
                        <span>
                            <label htmlFor="weight">Carga (kg)</label>
                            <input type="number" placeholder="12" id="weight" {...register('weight')}/>
                        </span>
                    </div>
                    {/* INTERVAL */}
                    <span>
                        <label htmlFor="interval">Intervalo (segundos)</label>
                        <input type="text" placeholder="120" id="interval" {...register('interval')}/>
                    </span>

                </ActivityForm>
                    <GroupButtons>
                        <Button onClick={()=>setActiveModal(true)} variant="contained" color="quaternary">Iniciar treino</Button>
                        <Button form="form-activity" variant="contained">Salvar treino</Button>
                    </GroupButtons>
            </ContainerMain>
            
        </div>
    </Content>
    </>)
}

export default NewActivity