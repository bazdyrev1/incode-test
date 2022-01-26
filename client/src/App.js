import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux'
import { tickersSelector, getTickers } from "../store/slices/tickerSlices";


const App = () => {
    const dispatch = useDispatch();
    const tickers = useSelector(tickersSelector.tickersList);
    console.log('tickers: ', tickers.currentState)
        
    

    useEffect(() => {
       
        const socket = io.connect("http://localhost:4000/");
        
        socket.emit('start');
        socket.on('ticker',(data) =>{
            dispatch(getTickers(data))
        })
        console.log()
    },[dispatch])
    return (
        <tickersList>
            {tickers.map((item) => (
                <TickerItem  />
            ))}
        </tickersList>
    )
}

export default App;
