// Store is like a mini, in the middle temporary database

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './slices/RootSlice';

export const store = configureStore({
    reducer,
    devTools: true,
})

export default store;