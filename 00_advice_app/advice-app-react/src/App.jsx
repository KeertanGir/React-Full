// imports
import { useEffect, useState } from "react"


function App() {
// states
   const [advice, setAdvice]  = useState("");
   const [count, setCount] = useState(0);

// funtion
   async function getAdvice() {
        const res = await fetch("	https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c+1);
   }

// Use Effect

   useEffect(function () {
    getAdvice();
   }, [])


//    Body
  return (
    <>
        <h1>{advice}</h1>
        <button onClick={getAdvice} >Get Advice</button>

        <Message count={count}/>

    </>

  )


// Components
  function Message(props){
    return(
        <p>
            you have read <strong>{props.count}</strong> pieces of advice
        </p>
    )
  }

}

// exports
export default App
