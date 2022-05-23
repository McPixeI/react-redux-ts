import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {

  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)

  const state = useSelector((state:State) => state.bank)
  const {value} = state

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={()=> withdrawMoney(100)}>Withdraw</button>
      <button onClick={()=> bankrupt()}>Bankrupt</button>

    </div>
  );
}

export default App;
