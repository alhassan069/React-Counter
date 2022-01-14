import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const addOne = (value)=>{
    setCount(count+value);
    console.log("Count: ",count)
  }
  const double = ()=>{
    setCount(count*2);
    console.log("Count: ",count)
  }
  return (
    <div className="App">
      <h3>Counter: {count}</h3>
      <button onClick={()=> addOne(1)}>Increment</button>
      <button onClick={()=> addOne(-1)}>Decrement</button>
      <button onClick={()=> double()}>Double</button>
    </div>
  );
}

export default App;
