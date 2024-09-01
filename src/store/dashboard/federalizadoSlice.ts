import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { RootState } from "../sotore"
import { Federalizado, CamposTabla } from "../../interfaces"

// Define a type for the slice state
interface FederalizadoState {
    list: Federalizado[],
    campos: CamposTabla[]
}

// Define the initial state using that type
const initialState: FederalizadoState = {
    list: [],
    campos: []
}

export const FederalizadoSlice = createSlice({
    name: 'federalizado',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setFederalizado: (state, action: PayloadAction<Federalizado[]>) => {
            state.list = action.payload;
        },
        setCampos: (state, action: PayloadAction<CamposTabla[]>) => {
            state.campos = action.payload;
        },
    },
})

export const { setFederalizado, setCampos } = FederalizadoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectFederalizado = (state: RootState) => state.federalizado.list;
// export const selectCampos = (state: RootState) => state.federalizado.campos;

export default FederalizadoSlice.reducer