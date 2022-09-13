import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './Store/store';

function App() {

  const count = useSelector((Store)=> store.counter.count);

  const dispatch = useDispatch();
 
  return (
    <div className="App">
       <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch({type:"SUBSTRACT"})}>-</button>
        <button onClick={()=>dispatch({type:"ADD"})}>+</button>
       </div>
    </div>
  );
}

export default App;
