import { createSlice } from "@reduxjs/toolkit"
// Define a type for the slice state
interface UiState {
    loader: boolean;
}

// Define the initial state using that type
const initialState: UiState = {
    loader: false
}

export const uiSlice = createSlice({
    name: 'ui',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        onShow: (state) => {
            state.loader = true
        },
        onHide: (state) => {
            state.loader = false
        },
    },
})

export const { onShow, onHide } = uiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectFederalizado = (state: RootState) => state.federalizado.list;
// export const selectCampos = (state: RootState) => state.federalizado.campos;

export default uiSlice.reducer;