/* MODULES */
import "react-datetime/css/react-datetime.css";
import Select from 'react-select'
import { useContext } from 'react'
import { useState } from 'react'; 
import { ThemeContext } from 'styled-components'
import Datetime from 'react-datetime';

/* INTERNAL MODULES */
import { Container, GroupTitleAndInput, SelectActivity, SelectDate } from '@styles/dashboard/charts'
import { CalendarIcon, SizeIcon } from '../Icons';
import { themeSelect } from './config/select';
import { iChartRadar } from "src/@types/components";


const ChartRadar = ({children, dateMeasurements, setDateMeasurements}: iChartRadar): JSX.Element => {
    // GLOBAL STATE
    const themeContext = useContext(ThemeContext) 

    const optionsSelect = [
        { value: 'Superiores', label: 'Superiores' },
        { value: 'Inferiores', label: 'Inferiores' },
    ] 

    return(<>
    <Container>
        <GroupTitleAndInput>
            <h5>Medidas</h5> 

            <div>
                <SelectDate>
                    <CalendarIcon/>
                    <Datetime dateFormat="MM-YYYY" value={dateMeasurements} timeFormat={false} 
                    onChange={({_d}: any)=>setDateMeasurements(_d)} />
                </SelectDate>

                <SelectActivity>
                    <SizeIcon/>
                    <Select options={optionsSelect} menuPosition={'fixed'}  id="selectbox" instanceId="selectbox" styles={themeSelect(themeContext)} defaultValue={optionsSelect[0]} />
                </SelectActivity>
            </div>
        </GroupTitleAndInput>

        {/* DASHBOARD */}
        {children}
    </Container>
    </>)
}

export default ChartRadar