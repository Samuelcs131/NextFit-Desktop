/* MODULES */
import Datetime from 'react-datetime';
import { useState } from "react"

/* INTERNAL MODULES */
import { CalendarIcon } from "@components/Icons" 
import { Container, GroupTitleAndInput, LegendChart, SelectDate } from "@styles/dashboard/charts" 
import { iChartGradient } from 'src/@types/components';


const ChartGradient = ({children}: iChartGradient): JSX.Element => {

    return(<>
      <Container>

        <GroupTitleAndInput>
            <h5>Indice de massa corporal</h5>
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