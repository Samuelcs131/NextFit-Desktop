/* MODULES */
import "react-datetime/css/react-datetime.css";
import Select from 'react-select'
import { useContext } from 'react'
import { useState } from 'react'; 
import { ThemeContext } from 'styled-components'
import Datetime from 'react-datetime';

/* INTERNAL MODULES */
import { Container, GroupTitleAndInput, SelectActivity, SelectDate } from '@styles/dashboard/charts'
import { ActivityIcon, CalendarIcon } from '../Icons';
import { themeSelect } from './config/select';


interface iChartArea{
    children:  JSX.Element | JSX.Element[]
}

const ChartArea = ({children}: iChartArea): JSX.Element => {
    // GLOBAL STATE
    const themeContext = useContext(ThemeContext)
    
    // DATE
    const [selectdDate, setSelectdDate] = useState<Date>(new Date()); 

    const optionsSelect = [
        { value: 'Supino', label: 'Supino' },
        { value: 'Rosca direta', label: 'Rosca direta' },
        { value: 'Voador', label: 'Voador' },
        { value: 'Desenvolvimento', label: 'Desenvolvimento' },
        { value: 'Remada unilateral', label: 'Remada unilateral' },
        { value: 'Costas', label: 'Costas' },
        { value: 'Triceps puxador', label: 'Triceps puxador' },
    ] 

    return(<>
    <Container>
        <GroupTitleAndInput>
            <h5>Análise de atividades</h5> 

            <div>
                <SelectDate>
                    <CalendarIcon/>
                    <Datetime dateFormat="MM-YYYY" value={selectdDate} timeFormat={false} 
                    onChange={({_d}: any)=>setSelectdDate(_d)} />
                </SelectDate>
                
                <SelectActivity>
                    <ActivityIcon/>
                    <Select options={optionsSelect} menuPosition={'fixed'}  id="selectbox" instanceId="selectbox" styles={themeSelect(themeContext)} defaultValue={optionsSelect[0]} />
                </SelectActivity>
            </div>
        </GroupTitleAndInput>

        {/* DASHBOARD */}
        {children}
    </Container>
    </>)
}

export default ChartArea