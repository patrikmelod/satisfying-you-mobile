import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    id: null,
    nome: null,
    data: null,
    img: null
}

export const pesquisaSlide = createSlice({
    name: 'pesquisa',
    initialState: initialValues,
    reducers: {
        reducerSetPesquisa: (state, action) => {
            state.id = action.payload.id,
            state.nome = action.payload.nome,
            state.data = action.payload.data,
            state.img = action.payload.img
        }
    }
})
 
export const { reducerSetPesquisa } = pesquisaSlide.actions

export default pesquisaSlide.reducer