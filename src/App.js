import { Header } from './Componets/Header'
import {Balance} from './Componets/Balance'
import {IncomeExpenses} from './Componets/IncomeExpenses'
import {TransectionList} from './Componets/TransectionList'
import {AddTransection} from './Componets/AddTransection'
import { GlobalProvider } from './Global/GlobalState'
import GPH from './Componets/GPH'
import './App.css'
function App() {
  return (
    <div className=" field">
     <GlobalProvider >
      <div className="App">
        <Header/> 
      </div>
      <div className="App container field2">
        <Balance/>
        <IncomeExpenses/>
        <TransectionList/>
        <AddTransection/>
      </div>
      <div className='field3'>
        <GPH/>
      </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
