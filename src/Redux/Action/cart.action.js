import * as ActionTypes from '../ActionType'

export const AddcartAction = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: ActionTypes.ADD_CART, payload : data })
}


export const GetcartAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_CART })
}

