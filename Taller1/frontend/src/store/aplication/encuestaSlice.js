import { createSlice } from '@reduxjs/toolkit';

export const encuestaSlice = createSlice({
    name: 'encuesta',
    initialState: {
        encuesta: [],
    },
    reducers: {
        onAddNewEncuesta: (state, {payload}) => {
            state.encuesta.push(payload);
        },
    }
});


// Action creators are generated for each case reducer function
export const { onAddNewEncuesta } = encuestaSlice.actions;