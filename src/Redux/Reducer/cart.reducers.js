import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    cart : [],
    buy : [],
    error: ''
}


export const CartReducers = (state = initalState, action) => {
    console.log(action.payload, action.type);
    switch (action.type) {
        case ActionTypes.ADD_CART :
            const Data = state.cart.find((c) => c.id === action.payload.id );
                if(Data){
                    Data.quantity++;
                    
                } else{
                    state.cart.push(action.payload);
                }
            return {
                ...state,
                isLoding : false,
                error : ''
            }
        case ActionTypes.GET_CART : 
            return {
                ...state,
                isLoding : false,
                error : ''
            }
        case ActionTypes.BUY_NOW :
            console.log(action.payload.id);
            const BData = state.buy.find((c) => c.id === action.payload.id );
                if(BData){
                    console.log("AAAAAAAAAAAAAAA");
                } else{
                    state.buy.push(action.payload)
                }
            return {
                ...state,
                isLoding : false,
                // buy: state.buy.concat(action.payload),
                error : ''
            }
        case ActionTypes.EMPTY_CART : 
            return {
                ...state,
                isLoding : false,
                cart : [],
                error: ''
            }
        case ActionTypes.BUYEMPTY_CART : 
            return {
                ...state,
                isLoding : false,
                buy : [],
                error: ''
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