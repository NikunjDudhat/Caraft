import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    cart : [],
    error: ''
}


export const CartReducers = (state = initalState, action) => {
    console.log("action.payload", action.payload);
    switch (action.type) {
        case ActionTypes.ADD_CART : 
            return {
                ...state,
                isLoding : false,
                cart : state.cart.concat(action.payload),
                error : ''
            }
        case ActionTypes.GET_CART : 
            return {
                ...state,
                isLoding : false,
                error : ''
            }
        default : 
            return state
    }
}