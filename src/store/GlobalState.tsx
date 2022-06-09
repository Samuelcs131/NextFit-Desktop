import { createContext, useReducer} from 'react' 
import { iContainerProvider, iGlobalState } from 'src/@types/globalState';
import { Reducer } from './Reducer';

const DataContext = createContext<any>({});

const INITIAL_STATE: iGlobalState = {
    theme: { themeDefault: 'dark' },
}

const ContainerProvider = ({children}: iContainerProvider) => {

    const [state, dispatch] = useReducer( Reducer, INITIAL_STATE )

    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export {ContainerProvider, DataContext};