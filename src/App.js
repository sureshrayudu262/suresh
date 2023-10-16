// import './App.css';
// import { useState } from 'react';
import useCustomHook from "./useCustomHook";


// function App() {

//   let [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   function increment() {
//     setCount(count + 1);
//   }
//   function decrement() {
//     setCount(count - 1);
//   }
function App()
{
  let {count,increment,decrement} = useCustomHook();
    return (
      <>
  
      <h1> Suresh</h1>
      <h2>{count} </h2>
      <button onClick={increment}>+</button> 
      <button onClick={decrement}>-</button>

      </>
   
  );
}

export default App;
