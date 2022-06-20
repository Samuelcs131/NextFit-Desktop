/* MODULES */
import Datetime from 'react-datetime';
import { useState } from "react"

/* INTERNAL MODULES */
import { CalendarIcon } from "@components/Icons" 
import { Container, GroupTitleAndInput, LegendChart, SelectDate } from "@styles/dashboard/charts" 

interface iChartGradient{
    children: JSX.Element | JSX.Element[]
}

const ChartGradient = ({children}: iChartGradient): JSX.Element => {
    // GLOBAL STATE 

    // DATE
    const [selectdDate, setSelectdDate] = useState<Date>(new Date());

    return(<>
      <Container>

        <GroupTitleAndInput>
            <h5>Indice de massa corporal</h5> 

            <SelectDate style={{width: '180px'}}>
                <CalendarIcon/>
                <Datetime dateFormat="MM-YYYY" value={selectdDate} timeFormat={false} 
                onChange={({_d}: any)=>setSelectdDate(_d)} /> 
            </SelectDate>
        </GroupTitleAndInput>
        
        {/* DASHBOARD */} 
        {children}
        <LegendChart>
            <p><span></span> Abaixo do peso</p>
            <p><span></span> Saúdavel</p>
            <p><span></span> Acima do peso</p>
        </LegendChart>
    </Container>
    </>)
}

export default ChartGradient