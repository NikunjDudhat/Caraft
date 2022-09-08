import { combineReducers } from "redux";
import { doctor } from "../Action/doctor.action";
import { CounterReducer } from "./counter.reducer";
import { DoctorReducers } from "./doctor.reducers";
import { ProductReducers } from "./product.reducers";


export const RootRedux = combineReducers({
    count : CounterReducer,
    doctor : DoctorReducers,
    product : ProductReducers
})