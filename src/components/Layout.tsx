import { useContext } from 'react';
import { ThemeProvider } from 'styled-components'
import { DataContext } from '../store/GlobalState';
import GlobalStyle from "../styles/globalStyle"; 
import { themeDark, themeLight } from '../theme/themeDefault';
import { iLayout } from '../@types/components';


const Layout = ({children}: iLayout): JSX.Element => {
 
    const { themeStyledGlobal } = useContext(DataContext)

    return(<>
    <ThemeProvider theme={themeStyledGlobal == 'dark' ? themeDark : themeLight}>
        <GlobalStyle/>
        {children}
    </ThemeProvider>
    </>)
}

export default Layout;