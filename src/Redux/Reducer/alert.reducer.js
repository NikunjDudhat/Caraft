import * as ActionType from '../ActionType'


const initialState = {
    text: "",
    color: ""
}

export const AlertReducer = (state= initialState, action) => {
    switch(action.type){
        case ActionType.SET_ALERT : 
            return {
                ...state,
                text: action.payload.text,
                color: action.payload.color
            }     
        case ActionType.RESET_ALERT : 
            return {
                ...state,
                initialState
            }       
        default : 
            return state;
    }

}