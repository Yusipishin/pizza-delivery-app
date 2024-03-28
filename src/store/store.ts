import {configureStore} from "@reduxjs/toolkit";
import reducer from "../reducers/reducers";

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development'
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch