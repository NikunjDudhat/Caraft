import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    cart : [],
    error: ''
}


export const CartReducers = (state = initalState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CART : 
            return {
                ...state,
                isLoding : true,
                error : ''
            }
        case ActionTypes.GET_CART : 
            return {
                ...state,
                isLoding : false,
                cart : state.cart.concat(action.payload),
                error : ''
            }
        default : 
            return state
    }
}