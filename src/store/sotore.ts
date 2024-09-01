import { configureStore } from '@reduxjs/toolkit'
import FederalizadoReducer from './dashboard/federalizadoSlice';
import UiReducer from './dashboard/uiSlice';

export const store = configureStore({
    reducer: {
        federalizado: FederalizadoReducer,
        ui: UiReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch