import { useState } from "react";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {

   const [step , setStep] = useState(1);
   const [test, setTest] = useState({name : "Keertan"})
   const [isOpen, setIsOpen] = useState(true)
 


  function handlePrevious(){
    if(step <= 1 ){
      alert(`You react Your Limit 1`)
    }else{
      setStep((s) => s-1)
      setTest({name  : "Keertan" })
    }
  }

  function handleNext(){
    // alert("Clicked on Next")
    if(step >= messages.length ){
      alert(`You react Your Limit ${messages.length}`)
    }else{
      setStep((s) => s + 1);
      setTest({name  : "Keertan Gir" })
    }
  }


  return (
    <>
      <button className="close" onClick={() => setIsOpen( (is) =>  !is )}>&times;</button>
      { isOpen && <div className="steps" >
        <div className="numbers">
          <div className={ step >= 1  ? "active" : "" } >1</div>
          <div className={ step >= 2  ? "active" : "" } >2</div>
          <div className={ step >= 3  ? "active" : "" }>3</div>
        </div>

        <p className="message" >Step {step} :- {messages[step -1]} {test.name} </p>

        <div className="buttons" >
          <button className="button" style={ {backgroundColor: "#77b3ec82", color: "#585d5e"}}
              onClick={handlePrevious}
          > <span> Previous </span> </button>
          <button className="button" style={ {backgroundColor: "#77b3ec82", color: "#585d5e"}}
               onClick={handleNext}
          > <span> Next </span> </button>
        </div>
      </div>
   } 
   </>
  );
}

export default App;
