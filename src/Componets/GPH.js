// // import { ArcElement ,Chart } from 'chart.js';
// // import React from 'react';
// // import { Pie } from 'react-chartjs-2';

// // const Data = [{
// //   id: 1,
// //   year: 2016,
// //   userGain: 80000,
// //   userLost: 823
// // },
// // {
// //   id: 2,
// //   year: 2017,
// //   userGain: 45677,
// //   userLost: 345
// // }
// // ];

// // Chart.register(ArcElement);


// // export const GPH = () => {
// //   const data = {
// //     labels: Data.map(item => item.year),
// //     datasets: [
// //       {
// //         data: Data.map(item => item.userGain),
// //         backgroundColor: ['#FF6384', '#36A2EB'],
// //       }
// //     ]
// //   };

// //   return <Pie data={data} />;
// // };

// import React,{useContext} from 'react'
// import { GlobalContext } from '../Global/GlobalState'
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label ,Tooltip, ResponsiveContainer} from 'recharts';
// import '../Css/GPH.css'



// export const GPH = () => {
//   const {transactions}=useContext(GlobalContext);
//   const Income_data = transactions.filter(t => t.amount > 0);
//   const Expense_data = transactions.filter(t => t.amount < 0);
//   const renderLineChart1 = (
//     <ResponsiveContainer width="100%" height="100%">
//     <LineChart width={600} height={500} data={Income_data}>
//       <Line className='' type="monotone" dataKey="amount" stroke="#8884d8" />
//       <CartesianGrid stroke="#ccc" />
//       <XAxis dataKey="text" />
//       <YAxis dataKey="amount"/>
//       <Tooltip />
//     </LineChart>
//     </ResponsiveContainer>

//   );
//   const renderLineChart2 = (
//     <ResponsiveContainer width="100%" height="100%">
//     <LineChart width={600} height={500} data={Expense_data}>
//       <Line className='' type="monotone" dataKey="amount" stroke="#8884d8" />
//       <CartesianGrid stroke="#ccc" />
//       <XAxis dataKey="text" />
//       <YAxis dataKey="amount"/>
//       <Tooltip />
//     </LineChart>
//     </ResponsiveContainer>
//   );
//     return (
//       <div className='GPH_field'>
//         <div>{renderLineChart1}</div>
//         <div>{renderLineChart2}</div>
//       </div>
//     );
//   };

import React, { useContext } from 'react';
import { GlobalContext } from '../Global/GlobalState';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const {transactions} = useContext(GlobalContext);

// const income_data = transactions.filter(t => t.amount > 0);
// const expense_data = transactions.filter(t => t.amount < 0);

export default function GPH() {

const {transactions} = useContext(GlobalContext);

const income_data = transactions.filter(t => t.amount > 0);
const expense_data = transactions.filter(t => t.amount < 0);

const incomeValues = income_data.map(t => t.amount);
  const expenseValues = expense_data.map(t => Math.abs(t.amount));

  const data = {
    labels: transactions.map(transaction => ( transaction={transaction} ))
    , // Assuming you have a 'date' property in your transactions
    datasets: [
    {
      type: 'line',
      label: 'Income',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data:incomeValues,
    },
    {
      type:'bar',
      label: 'Expense',
      backgroundColor: 'rgb(75, 192, 192)',
      data:expenseValues,
      borderColor: 'white',
      borderWidth: 2,
    },
  
  ],
};
  return <Chart type='bar' data={data}  />;
}
