import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    cart : [],
    error: ''
}


export const CartReducers = (state = initalState, action) => {
    console.log("action.payload", action.payload, action.type, state);
    switch (action.type) {
        case ActionTypes.ADD_CART : 
            return {
                ...state,
                isLoding : false,
                cart: state.cart.concat(action.payload),
                // cart : state.cart.map((c,i) => {
                //     console.log("c.id", c.id);
                //     if(c.id === action.payload){
                //         console.log("Good");
                //         return state.cart.concat(action.payload);
                        
                //     } else{
                //         console.log("Error");
                //         return { id: c.id,
                //             quantity: c.quantity + 1
                //         }
                //     }
                // }),
                error : ''
            }
        case ActionTypes.GET_CART : 
            return {
                ...state,
                isLoding : false,
                error : ''
            }
        case ActionTypes.DELETE_CART : 
            return {
                ...state,
                isLoding : false,
                cart : state.cart.filter((d, i ) => d.id !== action.payload),
                error : ''
            }
        case ActionTypes.INCREMENT : 
            return {
                ...state,
                isLoding : false,
                cart : state.cart.map((c) => {
                    if(c.id === action.payload){
                        return { id: c.id,
                            quantity: c.quantity + 1
                        }
                    } else{
                        return c;
                    }
                }),
                error : ''
            }
        case ActionTypes.DECREMENT : 
            return {
                ...state,
                isLoding : false,
                cart : state.cart.map((c) => {
                    if(c.id === action.payload){
                        return { id: c.id,
                            quantity: c.quantity - 1
                        }
                    } else{
                        return c;
                    }
                }),
                error : ''
            }
        default : 
            return state
    }
}