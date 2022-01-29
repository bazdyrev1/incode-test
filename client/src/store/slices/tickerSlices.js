import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickers: [],
    visibleTickers: [true, true, true, true, true, true]
}
const tickersSlice = createSlice({
    name: 'tickers',
    initialState: initialState,
    reducers: {
        getTickers: (state, { payload }) => {
            
            state.tickers = payload;
        },
        handlerVisible: (state, index) => {
            console.log('action', index.payload)
             state.visibleTickers[index.payload] = !state.visibleTickers[index.payload]
        }
        //придумать екшен
    }
});
export const tickersSelector = {
    tickersList: (state) => state.tickers,
    tickerVision: (state) => state.visibleTickers,

}
export const { getTickers, handlerVisible} = tickersSlice.actions;
export default  tickersSlice;