import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { RootRedux } from "./Reducer/combineReducers";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./ReduxSaga/RootSaga";

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'auth']
}

const persistedReducer = persistReducer(persistConfig, RootRedux)

const middlewares = [thunk, sagaMiddleware]

const countorStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares))

    sagaMiddleware.run(rootSaga)
    return store;
}

export const store = countorStore();

export let persistor = persistStore(store)