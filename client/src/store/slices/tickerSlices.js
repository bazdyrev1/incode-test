import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickers: {
        prevState: [],
        currentState: [] 
    },

}
const tickersSlice = createSlice({
    name: 'tickers',
    initialState: initialState,
    reducers: {
        incremented: state => {
            state.counter +=1
        },
        decremented: state => {
            state.counter -= 1
        },
        getTickers: (state, { payload }) => {
            // state.tickers = payload;
            state.tickers.prevState = state.tickers.currentState;
            state.tickers.currentState = payload
            
        }
    }
});
export const tickersSelector = {
    tickersList: (state) => state.tickers
}
export const { incremented, decremented, getTickers} = tickersSlice.actions;
export default  tickersSlice;