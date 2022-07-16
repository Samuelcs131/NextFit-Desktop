// LAYOUT
export interface iLayout {
    children: JSX.Element | JSX.Element[]
}

// HEAD PAGE
export interface iHeadPage {
    titlePage: string
}

// MENU
export interface iMenu {
    setPropsShowMenu: any 
    showMenu: boolean
}

// PAGE NEW ACTIVITY - MODAL ACTIVITY
export interface iModalActivity {
    options: {
        maxSeries: number
        secondsInterval: number
        repetitions: number
        setActiveModal: (active: boolean) => void
        chosenExercise?: string
    }
}
export interface iRenderTime {
    remainingTime: number
}


// PAGE DASHBOARD
export interface iActivityListSelected {
    value: string,
    label: string
}
export interface iMeasurementData {
    name: string,
    data: Array<number>
}
export interface iChartArea {
    children:  JSX.Element | JSX.Element[]
    setDateActivity: (dateActivity: Date)=> void
    dateActivity: Date
    exerciseList: Array<iActivityData>
    setChosenExercise: (exercise: string | undefined)=>void
}
export interface iChartGradient {
    children: JSX.Element | JSX.Element[]
}
export interface iChartRadar {
    children:  JSX.Element | JSX.Element[]
    dateMeasurements: Date
    setDateMeasurements: (dateMeasurements: Date)=> void
}