import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    id: null,
    nome: null,
    data: null,
    img: null,
    pessimo: 0,
    ruim: 0,
    neutro: 0,
    bom: 0,
    excelente: 0
}

export const pesquisaSlice = createSlice({
    name: 'pesquisa',
    initialState: initialValues,
    reducers: {
        reducerSetPesquisa: (state, action) => {
            state.id = action.payload.id
            state.nome = action.payload.nome
            state.data = action.payload.data
            state.img = action.payload.img
            state.pessimo = action.payload.pessimo
            state.ruim = action.payload.ruim
            state.neutro = action.payload.neutro
            state.bom = action.payload.bom
            state.excelente = action.payload.excelente
        }
    }
})
 
export const { reducerSetPesquisa } = pesquisaSlice.actions

export default pesquisaSlice.reducer