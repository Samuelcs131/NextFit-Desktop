import { useContext } from "react"
import { DefaultTheme } from "styled-components"
import { DataContext } from "../store/GlobalState"
import { Container, Pallete } from "@styles/colors"
import { themeDark, themeLight } from "../theme/themeDefault"

const Colors = (): JSX.Element => {

    const { themeStyledGlobal } = useContext(DataContext)

    let theme: DefaultTheme = themeStyledGlobal === 'dark' ? themeDark : themeLight
   
    return(<>
    <Container>
        <h6>COLORS</h6>
        <Pallete pallete={theme.pallete.primary}>
            <div>Main</div>
            <div>Dark</div>
            <div>Light</div>
            <span>Primary</span>
        </Pallete>

        <Pallete pallete={theme.pallete.secondary}>
            <div>Main</div>
            <div>Dark</div>
            <div>Light</div>
            <span>Secondary</span>
        </Pallete>

        <Pallete pallete={theme.pallete.tertiary}>
            <div>Main</div>
            <div>Dark</div>
            <div>Light</div>
            <span>Tertiary</span>
        </Pallete>

        <Pallete pallete={theme.pallete.quaternary}>
            <div>Main</div>
            <div>Dark</div>
            <div>Light</div>
            <span>Quaternary</span>
        </Pallete>
        
        <Pallete pallete={theme.pallete.success}>
            <div>Main</div>
            <div>Dark</div>
            <div>Light</div>
            <span>Success</span>
        </Pallete>

        <Pallete pallete={theme.pallete.info}>
            <div>Main</div>
            <div>Dark</div>
            <div>Light</div>
            <span>Info</span>
        </Pallete>
        
        <Pallete pallete={theme.pallete.error}>
            <div>Main</div>
            <div>Dark</div>
            <div>Light</div>
            <span>Error</span>
        </Pallete>
        

         
    </Container>
    </>)
}

export default Colors