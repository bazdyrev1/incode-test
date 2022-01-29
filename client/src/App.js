import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux'
import { tickersSelector, getTickers } from "./store/slices/tickerSlices";
import ModalWindow from "./components/UI/ModalWindow/ModalWindow";
import TickersList from './components/TickerList'

const App = () => {

    const dispatch = useDispatch();
    const tickers = useSelector(tickersSelector.tickersList);
    const tickerVision = useSelector(tickersSelector.tickerVision)
    console.log('tickers: ', tickerVision)
    const [modal, setModal] = useState(true)
    
        
    

    useEffect(() => {
       
        const socket = io.connect("http://localhost:4000/");
        socket.emit('start');
        socket.on('ticker',(data) =>{
            dispatch(getTickers(data))
            
        })
    


       
    },[dispatch]);
    
    return (
        <div>
        
        <ModalWindow visible={modal} setVisible={setModal}>
        <TickersList tickers={tickers} tickerVision={tickerVision} />
        </ModalWindow>
        {/* <TickersList tickers={tickers} tickerVision={tickerVision} /> */}
        </div>
    )
}

export default App;
