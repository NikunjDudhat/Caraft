import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { RootRedux } from "./Reducer/combineReducers";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['count','cart']
}

const persistedReducer = persistReducer(persistConfig, RootRedux)

export const countorStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)

    return {store, persistor};
}