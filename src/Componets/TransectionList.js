import React,{useContext} from 'react'
import { GlobalContext } from '../Global/GlobalState'
import '../Css/TransectionList.css'
export const TransectionList = () => {
  const {transactions}=useContext(GlobalContext);
  // console.log(context);
  let sign='+';
  const {deleteTransection}=useContext(GlobalContext);
  return (
    <div className='mainField'>
         <h4 className='MainHeading'>History</h4>
         <ul className="listfield">
          {
          transactions.map(transaction =>(
          <li className='LiPart'>
          <div><button className='Btn'  onClick={()=>{deleteTransection(transaction.id)}}>X</button></div>
          <div >{transaction.text}</div>
          <div >{sign=(transaction.amount>0)?'+':'-'} $ {Math.abs(transaction.amount)}
          </div>
          </li>
          ))
          }
         </ul>
    </div>
  )
}

