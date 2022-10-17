import { combineReducers } from "redux";
import { AlertReducer } from "./alert.reducer";
import { CartReducers } from "./cart.reducers";
import { CounterReducer } from "./counter.reducer";
import { DoctorReducers } from "./doctor.reducers";
import { LoginReducer } from "./login.reducer";
import { OrderReducers } from "./order.reducers";
import { ProductReducers } from "./product.reducers";


export const RootRedux = combineReducers({
    count : CounterReducer,
    doctor : DoctorReducers,
    product : ProductReducers,
    cart:  CartReducers,
    Order: OrderReducers,
    auth : LoginReducer,
    alert : AlertReducer
})