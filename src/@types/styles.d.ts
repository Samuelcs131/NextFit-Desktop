import { iColors } from "./defaultTheme";

export interface iPallete {
    pallete: iColors
}

export interface iButton {
    size?: string,
    color?: string,
    variant?: string
}

export interface iContainerMenu {
    show: boolean
}

export interface iListMenuActive {
    active: boolean
}

