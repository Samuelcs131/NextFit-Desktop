import { NextPage } from "next"
import { useContext, useEffect, useState } from "react"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { InputError } from "@styles/login"
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
// TYPES
import { iUser } from "src/@types/globalState"
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
    const exerciseList1: Array<iActivityListSelected> = [
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
    
    {false && <ModalActivity/>}

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

                <ActivityForm id="form-activity">
                    <div>
                        <SelectActivity>
                            <label htmlFor="selectbox">Exercicio</label>
                             <Select options={exerciseList1} id="selectbox" instanceId="selectbox" styles={styledSelect(themeContext)} defaultValue={exerciseList1[0]} onChange={(exercise)=>setChosenExercise(exercise?.label)} />
                        </SelectActivity>
                        <SelectDate>
                            <label htmlFor="">Data</label>
                            <Datetime dateFormat="DD/MM/YYYY" value={dateActivity} timeFormat={false} 
                             onChange={({_d}: any)=>setDateActivity(_d)}  />
                        </SelectDate>
                    </div>
                        <span>
                            <label htmlFor="series">Series</label>
                            <input type="text" placeholder="4" id="series" {...register('series')}/>
                        </span>
                    <div>
                        <span>
                            <label htmlFor="repetitions">Repetições</label>
                            <NumberFormat id="repetitions" format="##, ##, ##, ##" mask="_" placeholder='25, 15, 15, 15'  {...register('repetitions')}/>
                        </span>
                        <span>
                            <label htmlFor="weight">Carga (kg)</label>
                            <input type="number" placeholder="12" id="weight" {...register('weight')}/>
                        </span>
                    </div>
                    <span>
                        <label htmlFor="interval">Intervalo (segundos)</label>
                        <input type="text" placeholder="120" id="interval" {...register('interval')}/>
                    </span>

                

                </ActivityForm>
                    <GroupButtons>
                        <Button variant="contained" color="info">Iniciar treino</Button>
                        <Button form="form-activity" variant="contained">Salvar treino</Button>
                    </GroupButtons>
            </ContainerMain>
            
        </div>
    </Content>
    </>)
}

export default NewActivity