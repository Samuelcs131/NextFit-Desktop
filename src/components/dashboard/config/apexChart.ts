import { DefaultTheme } from "styled-components";

export function themeApexChartArea(themeContext: DefaultTheme){
    return({ 
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
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            fillSeriesCor: false,
            theme: 'dark',
            marker: {
                show: true,
            },
            x: {
                show: false,
                format: 'dd MMM', 
            },
            onDatasetHover: {
                highlightDataSeries: false,
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
    })
}