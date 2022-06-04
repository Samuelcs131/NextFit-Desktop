import { useContext } from 'react';
import { ThemeProvider } from 'styled-components'
import { DataContext } from '../store/GlobalState';
import GlobalStyle from "../styles/globalStyle"; 
import { themeDark, themeLight } from '../theme/themeDefault';
import { iLayout } from '../@types/components'; 
import { iDataContext } from '../@types/globalState';


const Layout = ({children}: iLayout): JSX.Element => {

    const { state } = useContext<iDataContext>(DataContext)

    return(<>
    <ThemeProvider theme={state.theme.themeDefault == 'dark' ? themeDark : themeLight}>
        <GlobalStyle/>
        {children}
    </ThemeProvider>
    </>)
}

export default Layout;