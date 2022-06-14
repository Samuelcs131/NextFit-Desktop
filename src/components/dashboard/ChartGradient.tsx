/* MODULES */
import dynamic from 'next/dynamic'  
const ReactApexChart: any = dynamic( () => import('react-apexcharts'),{ ssr: false })
import Datetime from 'react-datetime';
import { useContext, useState } from "react"  
import { ThemeContext } from "styled-components"

/* INTERNAL MODULES */
import { CalendarIcon } from "@components/Icons"
import { DataContext } from "@store/GlobalState"
import { Container, GroupTitleAndInput, SelectDate } from "@styles/dashboard/chartgradient"
import { themeApexChartGradient } from "./config/apexChart";


const ChartGradient = (): JSX.Element => {
    // GLOBAL STATE
    const themeContext = useContext(ThemeContext)
    const {themeStyledGlobal } = useContext(DataContext)

    // DATE
    const [selectdDate, setSelectdDate] = useState<Date>(new Date());
 
    const series = [100]
 

    return(<>
      <Container>

        <GroupTitleAndInput>
            <h5>Indice de massa corporal</h5> 

            <SelectDate>
                <CalendarIcon/>
                <Datetime dateFormat="MM-YYYY" value={selectdDate} timeFormat={false} 
                onChange={({_d}: any)=>setSelectdDate(_d)} />
            </SelectDate>
        </GroupTitleAndInput>


        <ReactApexChart options={themeApexChartGradient(themeContext,themeStyledGlobal)} series={series} type="radialBar" width="100%" height={320} />

    </Container>
    </>)
}

export default ChartGradient