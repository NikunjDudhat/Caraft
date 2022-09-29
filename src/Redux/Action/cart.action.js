import * as ActionTypes from '../ActionType'

export const AddcartAction = (data) => (dispatch, getState) => {
    // console.log("Data", data);
    // console.log("getState().cart.cart", getState().cart.cart);
    // let RData = [];
    // let CartData = getState().cart.cart.map((c, i) => {
    //     // console.log("cData",data.id, c.id);
    //     if(c.id === data.id){
    //         console.log("Good");
    //         let Data = {
    //             ...c,
    //             quantity: c.quantity + 1
    //         }
    //         console.log("DDData", Data);
    //         return data;
    //     }  else{
    //         console.log("Error");
    //         return data;
    //     }
    // })
    // console.log("RData", CartData);
    dispatch({ type: ActionTypes.ADD_CART, payload : data })
}


export const GetcartAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_CART })
}


export const DeletecartAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_CART, payload: data })
}

export const Increment = (id) => (dispatch) => {
    dispatch({type : ActionTypes.INCREMENT, payload : id})
}

export const Decrement = (id) => (dispatch) => {
    dispatch({type : ActionTypes.DECREMENT, payload: id})
}