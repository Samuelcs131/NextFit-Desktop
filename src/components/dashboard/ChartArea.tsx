/* MODULES */
import "react-datetime/css/react-datetime.css"
import Select from 'react-select'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Datetime from 'react-datetime'

/* INTERNAL MODULES */
import { Container, GroupTitleAndInput, SelectActivity, SelectDate } from '@styles/dashboard/charts'
import { ActivityIcon, CalendarIcon } from '../Icons'
import { themeSelect } from './config/select'
import { iChartArea } from "src/@types/components"

const ChartArea = ({children,exerciseList,dateActivity,setDateActivity,setChosenExercise}: iChartArea): JSX.Element => {
    // GLOBAL STATE
    const themeContext = useContext(ThemeContext) 
 
    return(<>
    <Container>
        <GroupTitleAndInput>
            <h5>Análise de atividades</h5> 

            <div>
                <SelectDate>
                    <CalendarIcon/>
                    <Datetime dateFormat="MM-YYYY" timeFormat={false} value={dateActivity} 
                    onChange={({_d}: any)=>setDateActivity(_d)} />
                </SelectDate>
                
                <SelectActivity>
                    <ActivityIcon/>
                    <Select options={exerciseList} id="selectbox" instanceId="selectbox" styles={themeSelect(themeContext)} defaultValue={exerciseList[0]} onChange={(exercise)=>setChosenExercise(exercise?.label)} />
                </SelectActivity>
            </div>
        </GroupTitleAndInput>

        {/* DASHBOARD */}
        {children}
    </Container>
    </>)
}

export default ChartArea