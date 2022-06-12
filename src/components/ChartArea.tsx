import { Container } from '@styles/dashboard/chartarea'
import dynamic from 'next/dynamic'  
const ReactApexChart: any = dynamic( () => import('react-apexcharts'),{ ssr: false })

const ChartArea = (): JSX.Element => {
 
    const options = {
    chart: {
        height: 350,
        type: 'area',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        offsetY: 20,

        labels: {
            colors: "#fff"
        },
        itemMargin: {
            horizontal: 10,
            vertical: 15
        },
        
    },
    stroke: {
        curve: 'smooth'
    },
    colors: ['#FF6A00', '#009FFF', '#F5315D'],
    fill: {
        type: 'gradient',
        colors: ['#ff0000', '#07ffc1'],
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.30,
            opacityTo: 0.01,
            stops: [20, 100, 100, 100]
            },
        },
    grid: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy'
        },
    },
    xaxis: {
        type: 'datetime',
        categories: ["2022-06-01", "2022-06-08", "2022-06-15", "2022-06-23", "2022-06-29", "2022-07-07", "2022-07-19"],
        labels: {
            style: {
                colors: '#ffffff',
            }, 
        },
        axisBorder: {
            show: true,
            color: '#fff',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: false
        }
        
    },
    yaxis: {
        labels: {
            style: {
                colors: '#ffffff',
            }, 
        },
        axisBorder: {
            show: true,
        },
        axisTicks: {
            show: false
        }
    }
    }
    
    const series = [{
        name: 'Series',
        data: [31, 40, 28, 31, 42, 29, 45]
        }, {
        name: 'Repetições',
        data: [61, 52, 75, 52, 44, 52, 31]
        }, {
        name: 'Peso',
        data: [71, 82, 65, 72, 84, 62, 71]
    }]

    return(<>
    <Container>
        <h5>Análise de atividades</h5>
        <ReactApexChart options={options} series={series} type="area" width="100%" height={320} />
    </Container>
    </>)
}

export default ChartArea