import React from "react";
import TickerItem from "./TickerItem";
import { WrapperList, UlList, LiList } from './renderTickerList'

const TickerList = ({ tickers, tickerVision }) => {
  //получить из стора визибл.
  /*добавить в стайлед когда пуст то надпись */
  return (
    <WrapperList>
      <UlList style={{listStyleType: 'none'}}> 
        
        {tickers.map((ticker, index) => tickerVision[index] && (
            
            <LiList key={index}>
              <TickerItem ticker={ticker} index={index} tickerVision={tickerVision} />
            </LiList>
            
          ))} 
      </UlList>
    </WrapperList>
  );
};

export default TickerList;
