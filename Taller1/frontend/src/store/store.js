import { configureStore } from "@reduxjs/toolkit";
import { encuestaSlice } from "./aplication/encuestaSlice";

export const store = configureStore({
    reducer: {
        encuesta: encuestaSlice.reducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})