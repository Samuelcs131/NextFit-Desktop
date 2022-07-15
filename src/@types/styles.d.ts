import { iColors } from "./defaultTheme";

// DEFAULT PALLETE
export interface iPallete {
    pallete: iColors
}

// DEFAULT BUTTONS
export interface iButton {
    size?: string,
    color?: string,
    variant?: string
    disabled?: boolean
}

// MENU
export interface iContainerMenu {
    show: boolean
}
export interface iListMenuActive {
    active: boolean
}

