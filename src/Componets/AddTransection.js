import React,{useState,useContext} from 'react'
import { GlobalContext } from '../Global/GlobalState';
import "../Css/AddTransection.css"
export const AddTransection = () => {
    const[text,setText]=useState('');
    const[amount,setAmount]=useState();

    const {addTransection}=useContext(GlobalContext);
    const onsubmit=e=>{
         e.preventDefault();

         const newTransection={
         id:Math.floor(Math.random()*1000),
         text,
         amount
      }
      addTransection(newTransection)
      setText("");
      setAmount("");
    }

  return (
    <div>
       <h3 className="MainHeading">Add new transection</h3>
       <form onSubmit={onsubmit}>
         <div>
            <p className="subHeading" >Text <br/> </p>
            <input className="InputField" type="text"  value={text}
            onChange={(e)=>{
              setText(e.target.value)
             }
            }
            placeholder="Enter text..." />
         </div>
         <div>
            <p className="subHeading">Amount <br/> (negative-expense,positive-income)<br/> </p>
            <input className="InputField" placeholder="Enter amount..."  type="number" value={amount} 
            onChange={(e)=>{
              setAmount(e.target.value)
             }}/>
         </div><br/>
         <button className="btn" type='submit'>Add Transection</button>
       </form>
    </div>
  )
}
