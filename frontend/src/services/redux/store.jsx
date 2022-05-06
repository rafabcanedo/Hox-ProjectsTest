import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { postApi } from "../post";

export const store = configureStore({
    reducer: {
     [postApi.reducerPath]: postApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)

/*
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import rootreducer

const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
*/