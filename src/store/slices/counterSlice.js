import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    step: 1
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            return {
                ...state,
                count: state.count + state.step
            }
        },
        decrement: (state, action) => {
            return {
                ...state,
                count: state.count - state.step
            }
        },
        setStep: (state, action) => {
            state.step = Number(action.payload);
        }
    }
});

const { reducer, actions } = counterSlice;

// actions creators

const { increment, decrement, setStep } = actions;

export { increment, decrement, setStep };
export default reducer;