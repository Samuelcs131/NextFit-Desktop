import { DefaultTheme } from "styled-components";

export function themeApexChartArea(themeContext: DefaultTheme, themeStyledGlobal: string){
    return({ 
        /* CHART */
        chart: { 
            type: 'area',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12.75L9 15.75L12 12.75" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9V15.75" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.66 13.5675C16.3121 13.1089 16.801 12.4546 17.056 11.6993C17.3109 10.9441 17.3186 10.1272 17.0778 9.36732C16.837 8.60743 16.3604 7.94402 15.7171 7.47337C15.0737 7.00272 14.2971 6.74933 13.5 6.74995H12.555C12.3294 5.87085 11.9074 5.05439 11.3206 4.36201C10.7338 3.66963 9.99762 3.11939 9.16742 2.75272C8.33721 2.38604 7.43464 2.21247 6.52765 2.24509C5.62067 2.2777 4.73289 2.51565 3.93118 2.94102C3.12946 3.36639 2.43468 3.96809 1.89915 4.70082C1.36362 5.43356 1.0013 6.27823 0.839456 7.17126C0.677613 8.06429 0.720468 8.9824 0.964796 9.85647C1.20912 10.7305 1.64855 11.5378 2.25001 12.2175" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>', 
                  pan: true, 
                } 
              },
        }, 

        /* DATA LABELS */
        dataLabels: {
            enabled: false
        },

        /* LEGEND */
        legend: {
            offsetY: 20,
            labels: {
                colors: themeContext.pallete.text.primary
            },
            itemMargin: {
                horizontal: 10,
                vertical: 15
            },
        },

        /* STROKE */
        stroke: {
            curve: 'smooth'
        },

        /* COLORS */
        colors: [ 
            themeContext.pallete.quaternary.main,
            themeContext.pallete.tertiary.main, 
            themeContext.pallete.secondary.main
        ],

        /* FILL */
        fill: {
            type: 'gradient', 
            gradient: {
                enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0
              }
        },

        /* GRID */
        grid: {
            show: false,
        }, 

        /* TOOL TIP */
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            fillSeriesCor: false,
            theme: themeStyledGlobal,
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

        /* X AXIS */
        xaxis: {
            type: 'datetime',
            categories: ["2022-06-02", "2022-06-08", "2022-06-15", "2022-06-19", "2022-06-23", "2022-06-025", "2022-06-29"],
            labels: {
                style: {
                    colors: themeContext.pallete.grey.A200,
                }, 
            },
            axisBorder: {
                show: true,
                color: themeContext.pallete.grey.A200, 
            },
            axisTicks: {
                show: false
            }
            
        },

        /* Y AXIS */
        yaxis: {
            labels: {
                style: {
                    colors: themeContext.pallete.grey.A200,
                }, 
            },
            axisBorder: {
                show: true,
                color: themeContext.pallete.grey.A200,
            },
            axisTicks: {
                show: false
            }
        }
    })
}

export function themeApexChartGradient(themeContext: DefaultTheme){ return({
 
    /* CHART */
    chart: {
        type: 'radialBar',
        toolbar: {
        show: false,
        },
    },

    /* PLOT OPTIONS */
    plotOptions: {
        radialBar: {
        startAngle: -135,
        endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                background: themeContext.pallete.background.default, 
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                    dropShadow: {
                        enabled: false,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
            },
        track: {
            background:  themeContext.pallete.background.default,
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
            }
        },
    
        dataLabels: {
            show: true,
            name: {
            offsetY: -10,
            show: true,
            color: themeContext.pallete.text.primary,
            fontSize: '17px'
            },
            value: {
            formatter: function(val: string) {
                return parseInt(val);
            },
            color: themeContext.pallete.text.primary,
            fontSize: '36px',
            show: true,
            }
        }
        }
    },

    /* FILL */
    fill: {
        colors: [function({ value }: any) {
            if (value < 18.5) {
                return themeContext.pallete.quaternary.main
            } else if (value >= 18.5 && value < 24.99) {
                return themeContext.pallete.primary.main
            } else {
                return themeContext.pallete.secondary.main
            }
            }]
        },
    
    /* STROKE */
    stroke: {
        lineCap: 'round'
    },

    /* LABELS */
    labels: ['IMC'],

    /* STATES */
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0,
            }
        },
        hover: {
            filter: {
                type: 'none', 
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
            }
        },
    }
})
}

export function themeApexChartRadar(themeContext: DefaultTheme, themeStyledGlobal: string, nameCategories: Array<string>){ return({

    /* CHARTS */
    chart: {
        height: 350,
        type: 'radar',
        zoom: {
        enabled: false
        },
        toolbar: {
            show: false,
        }
    },

    /* DATA LABELS */
    dataLabels: {
        enabled: false
    }, 

    /* PLOT OPTIONS */
    plotOptions: {
        radar: {
        size: 140,
        polygons: {
            strokeColors: themeContext.pallete.background.paper,
            connectorColors: themeContext.pallete.background.paper,
            fill: {
            colors: [themeContext.pallete.background.default, themeContext.pallete.background.default]
            },
             
        }
        }
    },

    /* STROKE */
    stroke: {
        curve: 'smooth'
    },

    /* COLORS */
    colors: [themeContext.pallete.secondary.main,themeContext.pallete.tertiary.main, themeContext.pallete.quaternary.main],
    
    /* MARKERS */
    markers: {
        size: 1,
        colors: [themeContext.pallete.secondary.main,themeContext.pallete.tertiary.main, themeContext.pallete.quaternary.main],
        strokeColor: 'white',
        strokeWidth: 2,
    },

    /* LEGEND */
    legend: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        labels: {
            colors: themeContext.pallete.text.primary,
        },
        itemMargin: {
            horizontal: 10,
            vertical: 0
        },
    },

    /* TOOL TIP */
    tooltip: {
        theme: themeStyledGlobal,
        y: {
        formatter: function(val: any) {
            return val
        }
        }
    },
  
    /* X AXIS */
    xaxis: {
        categories: nameCategories,
        labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: [themeContext.pallete.grey.A200,themeContext.pallete.grey.A200,themeContext.pallete.grey.A200,themeContext.pallete.grey.A200,themeContext.pallete.grey.A200,themeContext.pallete.grey.A200],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            }, 
        },
    },

    /* Y AXIS */
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function(val: any, i: any) {
                if (i % 2 === 0) {
                return val
                } else {
                return ''
                }
            },
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: [themeContext.pallete.grey.A200,themeContext.pallete.grey.A200,themeContext.pallete.grey.A200,themeContext.pallete.grey.A200,themeContext.pallete.grey.A200,themeContext.pallete.grey.A200],
                fontSize: '12px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            }, 
        } 
    }

})}
