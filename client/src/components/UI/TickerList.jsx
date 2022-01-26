import React from "react";
import { useSelector } from "react-redux";
import { tickersSelector } from "../../store/slices/tickerSlices";

const TickerList = () => {
    const tickers = useSelector(tickersSelector.tickersList);
    return (
        <ul>
            
           
        </ul>
    )
}

export default TickerList ;