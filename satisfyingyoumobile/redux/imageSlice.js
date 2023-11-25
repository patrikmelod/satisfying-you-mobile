import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    image: null
}

export const imageSlice = createSlice({
    name: 'image',
    initialState: initialValues,
    reducers: {
        reducerSetImage: (state, action) => {
            state.image = action.payload.image
        }
    }
})
 
export const { reducerSetImage } = imageSlice.actions

export default imageSlice.reducer