import React from "react";
import { useSelector } from "react-redux";



// функция которая берет из обьекта сокращенные записи сравнивает и возвращает полные 
const TickerItem = (ticker) => {
    const fullNames = () =>{}
    
    console.log()
       return(
        <div>
          <div>
                <div>{ticker.}</div>
                <div>{fullNames}</div>
            </div>
            <div>
                <span>{}</span>
            </div>
            <div>
                <span>
                    <div>
                        <div>
                            <span>разница в процентах в - и по цвету </span>
                        </div>
                        <div>
                            <span>разница в процентах + и по цвету </span>
                        </div>
                    </div>
                </span>
            </div>
            <div>
                <div>
                    <button>Delete</button>
                </div>
            </div>  
            
           
        </div>
           
       )
        
}

export default TickerItem;
