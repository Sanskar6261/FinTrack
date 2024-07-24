import { GlobalContext } from '../Global/GlobalState'
import React, { useContext } from 'react'
export const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  let finalbalance=0;
  transactions.map(transaction =>(
    finalbalance=finalbalance + Math.abs(transaction.amount)
  ))
  return (
    <div>
       <h4>YOUR BALANCE</h4>
       <h1>{finalbalance}</h1>
    </div>
  )
} 
