import * as ActionTypes from '../ActionType'

export const AddcartAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_CART, payload : data })
}

export const BuyAction = (data) => (dispatch) => {
    console.log("Dataaaaaaa", data);
    dispatch({ type: ActionTypes.BUY_NOW, payload : data })
}


export const GetcartAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_CART })
}


export const DeletecartAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_CART, payload: data })
}

export const EmptyAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.EMPTY_CART })
}

export const BuyEmptyAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.BUYEMPTY_CART })
}

export const Increment = (id) => (dispatch) => {
    dispatch({type : ActionTypes.INCREMENT, payload : id})
}

export const Decrement = (id) => (dispatch) => {
    dispatch({type : ActionTypes.DECREMENT, payload: id})
}
