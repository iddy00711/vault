import React, {useState} from 'react';


export default function NumberInput (props) {

    const [inputAmount, setInputAmount] = useState(0);
    const [toogleBool, setToggleBool] = useState(false);

   
  


    return (
     <div>
     <div className='button' onClick={setToggleBool(!toogleBool)}>0</div>
     {toogleBool?
     <ul>
         {props.cashAmount.map((cash, index=>{
            <li id={index} onClick={props.handleCash(cash)}>{cash}</li>
         }))}
     </ul>:null
     }
         
     </div>
    );
  
}
