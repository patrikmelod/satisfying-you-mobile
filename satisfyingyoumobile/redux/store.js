import { configureStore } from "@reduxjs/toolkit";
import pesquisaSlice from "./pesquisaSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
    reducer: {
        pesquisa: pesquisaSlice,
        login: loginSlice
    }
})