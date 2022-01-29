import React from "react";
import { useDispatch } from "react-redux";
import ControlBtn from "./UI/buttons/ControlBtn";
import { handlerVisible } from '../store/slices/tickerSlices'
import {WrapperItem, PartItem, AbbreviationItem} from './renderTickerItem';

const TickerItem = ({ ticker, index }) => {
  const dispatch = useDispatch();

  const fullNames = {
    AAPL: "Apple",
    GOOGL: "Alphabet",
    MSFT: "Microsoft",
    AMZN: "Amazon",
    FB: "Facebook",
    TSLA: "Tesla",
  };
  const funcFullNames = (ticker) => {
    for (let key in fullNames) {
      if (key === ticker.ticker) {
        return fullNames[key];
      } else { 
          <h2>Full names not found!</h2>
      }
    }
   
  };
  
  const handleVisionClick = (index) => {
    console.log('index', index)
   dispatch(handlerVisible(index))
  } 


  return (
    <WrapperItem>
      <PartItem>
        <AbbreviationItem backgroundColor='red'>{ticker.ticker}</AbbreviationItem>
        <div>{funcFullNames(ticker)}</div>
      </PartItem>
      <PartItem>
        <span>{ticker.price}</span>
      </PartItem>
      
      
        
          
            {(ticker.change > ticker.price) ?
                <div  style ={{width: 'auto'}}>
                  <PartItem>
                    {ticker.change}
                  </PartItem>
                    <PartItem style={{color: 'green'}}>
                    <svg focusable="false" width="16" height="16" viewBox="0 0 24 24" className=" NMm5M"><path fill='green' d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
                      {ticker.change_percent}</PartItem>
                </div>
            :   <div  style={{color: 'red'}}>
                    <PartItem>
                      {ticker.change}
                    </PartItem>
                    <PartItem>
                      <svg focusable="false" width="16" height="16" viewBox="0 0 24 24" className=" NMm5M"><path fill='red' d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>
                      {ticker.change_percent} </PartItem>
                </div>
            }
          
        
      
      <div>
        <div>
          <ControlBtn onClick={() => handleVisionClick(index)}>Delete</ControlBtn>
        </div>
      </div>
    </WrapperItem>
  );
};

export default TickerItem;
