import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    product : [],
    error: ''
}


export const ProductReducers = (state = initalState, action) => {
    switch (action.type) {
        case ActionTypes.LOADING_MEDICINES : 
            return {
                ...state,
                isLoding : true,
                error : ''
            }
        case ActionTypes.GET_PRODUCT : 
            return {
                ...state,
                isLoding : false,
                product : action.payload,
                error : ''
            } 
        case ActionTypes.POST_PRODUCT : 
            return {
                ...state,
                isLoding : false,
                product : state.product.concat(action.payload),
                error : ''
            } 
        case ActionTypes.DELETE_PRODUCT : 
            return {
                ...state,
                isLoding : false,
                product : state.product.filter((d, i ) => d.id !== action.payload),
                error : ''
            } 
        case ActionTypes.UPDATE_PRODUCT : 
            return {
                ...state,
                isLoding : false,
                product : state.product.map((u) => {
                    if( u.id === action.payload.id) {
                        return action.payload
                    } else {
                        return u ;
                    }
                }),
                error : ''
            }
        case ActionTypes.ERROR_MEDICINES : 
            return {
                ...state,
                isLoding : false,
                product : [],
                error : action.payload
            }
        default : 
            return state
    }
}