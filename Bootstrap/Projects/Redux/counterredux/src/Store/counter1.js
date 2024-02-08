import { createSlice } from "@reduxjs/toolkit";

const counter1slice = createSlice({
    name: 'counter1',
    initialState: {
        counterVal1: 0
    },
    reducers: {
        increment: (state) => {

        }
    }
})


export const {increment} = counter1slice.actions;

export default counter1slice