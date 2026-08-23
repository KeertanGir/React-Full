import { useState } from "react";
import TodayMessage from "./TodayMessage";
import PastMessage from "./PastMessage";
import FutureMessage from "./FutureMessage";


function App() {

  const [count, setCount] = useState(1);
  const [offSet, setOffSet] = useState(0);

  const selectedDate = new Date();
  selectedDate.setDate(selectedDate.getDate() + offSet)

  function handleCountAdd() {
    setCount((minus) => minus + 1)
  }

  function handleCountSub() {

    if (count > 1) {
      setCount((minus) => minus - 1)
    }
  }

  function handleAdd() {
    setOffSet((minus) => minus + count)
  }

  function handleSub() {
    setOffSet((minus) => minus - count)
  }




  return (
    <>

      

      <button onClick={handleCountSub} > - </button>
      <h1>{count}</h1>
      <button onClick={handleCountAdd} > + </button>



      

      <button onClick={handleSub} > - </button>
      <h1>{offSet}</h1>
      <button onClick={handleAdd} > + </button>


      {/* <h1> {
        offSet === 0 ? (
          `Today Date is  
          ${selectedDate.getDate()} / 
          ${selectedDate.getMonth()} /
          ${selectedDate.getFullYear()} and Day is
          ${selectedDate.toLocaleDateString( "en-Us", {
            weekday: "long"
          })}`)
          
          : (offSet < 0 ? `
           In Past It was the date  
           ${selectedDate.getDate()} 
           / ${selectedDate.getMonth()} 
           / ${selectedDate.getFullYear()} 
           and the ${selectedDate.toLocaleDateString(  "en-Us", {
              weekday: "long",
            })}.`
             : ` In Future it whould be the date 
             ${selectedDate.getDate()} 
             / ${selectedDate.getMonth()} 
             / ${selectedDate.getFullYear()} 
             and the ${selectedDate.toLocaleDateString(
            "en-Us", {
              weekday: "long",
            })}.` ) }</h1> */}


          {
            offSet === 0 ? <TodayMessage selectedDate= {selectedDate} />
          : (offSet < 0 ?  <PastMessage selectedDate= {selectedDate} />
             : <FutureMessage selectedDate={selectedDate}/> ) }
      
    </>
  );
}

export default App;
