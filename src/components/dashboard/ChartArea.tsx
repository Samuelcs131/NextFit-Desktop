/* MODULES */
import "react-datetime/css/react-datetime.css";
import dynamic from 'next/dynamic'  
const ReactApexChart: any = dynamic( () => import('react-apexcharts'),{ ssr: false })
import Select from 'react-select'
import { useContext } from 'react'
import { useState } from 'react'; 
import { ThemeContext } from 'styled-components'
import Datetime from 'react-datetime';

/* INTERNAL MODULES */
import { Container, GroupInput, SelectActivity, SelectDate } from '@styles/dashboard/chartarea'
import { ActivityIcon, CalendarIcon } from '../Icons';
import { themeSelect } from './config/select';
import { themeApexChartArea } from './config/apexChart'; 




const ChartArea = (): JSX.Element => {
    // GLOBAL STATE
    const themeContext = useContext(ThemeContext)
    
    // DATE
    const [selectdDate, setSelectdDate] = useState<Date>(new Date());

    const series = [
        {
            name: 'Series',
            data: [31, 40, 28, 31, 42, 29, 45]
        }, {
            name: 'Repetições',
            data: [61, 52, 75, 52, 44, 52, 31]
        }, {
            name: 'Peso',
            data: [71, 82, 65, 72, 84, 62, 71]
        }
    ]

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
        <h5>Análise de atividades</h5> 

        <GroupInput>
            <SelectDate>
                <CalendarIcon/>
                <Datetime dateFormat="MM-YYYY" value={selectdDate} timeFormat={false} 
                onChange={({_d}: any)=>setSelectdDate(_d)} />
            </SelectDate>
            
            <SelectActivity>
                <ActivityIcon/>
                <Select options={optionsSelect} id="selectbox" instanceId="selectbox" styles={themeSelect(themeContext)} defaultValue={optionsSelect[0]} />
            </SelectActivity>
        </GroupInput>


        <ReactApexChart options={themeApexChartArea(themeContext)} series={series} type="area" width="100%" height={320} />
    </Container>
    </>)
}

export default ChartArea