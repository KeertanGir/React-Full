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

      
        <TextMain step={step} > <p> {messages[step - 1]}</p>  </TextMain>

        <div className="buttons" >
          <Button bgColor={"#77b3ec82"} textColor={"#585d5e"} onCLick={handlePrevious} >
            <span>👈</span> <span> Previous </span>
          </Button>
          <Button bgColor={"#77b3ec82"} textColor={"#585d5e"} onCLick={handleNext} >
            <span> Next </span> <span>👉</span> 

          </Button>
        </div>
      </div>
   } 
   </>
  );

}

function TextMain( {step , children }){
  return (
            <div className="message" >

              <h3> Step {step} </h3>
             { children }

             </div>

  );
}

function Button( { bgColor , textColor, onCLick , children} ){
  return (
    <button className="button" style={ {backgroundColor: bgColor, color: textColor}}
               onClick={onCLick}
          > 
        {children}      
    </button>
  );
}

export default App;
