import { configureStore } from "@reduxjs/toolkit";
import tickerSlice from "./slices/tickerSlices";

const store = configureStore({
    reducer: tickerSlice.reducer
})

export default store;