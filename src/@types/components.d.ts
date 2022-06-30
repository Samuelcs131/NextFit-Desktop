export interface iLayout {
    children: JSX.Element | JSX.Element[]
}
 
export interface iHeadPage {
    titlePage: string
}

export interface iPassword{
    email: string
    token: string
    passwordResetExpires: Date
    passwordResetToken: string
    dateNow: Date
}

export interface iMenu {
    setPropsShowMenu: any 
    showMenu: boolean
}

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
    dateIMC: Date
    setdDateIMC: (dateIMC: Date)=> void
}

export interface iChartRadar {
    children:  JSX.Element | JSX.Element[]
    dateMeasurements: Date
    setDateMeasurements: (dateMeasurements: Date)=> void
}