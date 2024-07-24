import { GlobalContext } from '../Global/GlobalState'
import React, { useContext } from 'react';
import '../Css/IandE.css'

export const IncomeExpenses = () => {
  const {transactions}=useContext(GlobalContext);
  let Income=0;
  let Expense=0;
  transactions.map(transaction =>(
    (transaction.amount>0)?Income=Income + Math.abs(transaction.amount):Expense=Expense+ Math.abs(transaction.amount)
  ))
  return (
    <div className='Main_filed'>
      <div className='leftfield'>
      <h4 >INCOME</h4>
      <p className='income'>+${Math.abs(Income)}</p>
      </div>
      <div className='rightfield'>
      <h4 >EXPENSE</h4>
      <p className='expense'>-${Math.abs(Expense)}</p>
      </div>
    </div>
  )
} 
