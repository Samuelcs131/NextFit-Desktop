import { iActions, iGlobalState } from "../@types/globalState";

export const Reducer = (state: iGlobalState, action: iActions): any => {

    switch(action.type){

    // THEME
    case 'theme':
    return { ...state, theme: action.payload };

    // DEFAULT
    default:
    return state;

    }

}