import { configureStore } from "@reduxjs/toolkit";
import pesquisaSlice from "./pesquisaSlice";
import loginSlice from "./loginSlice";
import imageSlice from "./imageSlice";

export const store = configureStore({
    reducer: {
        pesquisa: pesquisaSlice,
        login: loginSlice,
        image: imageSlice
    }
})