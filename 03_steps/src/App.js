

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const count = 3;


  function handlePrevious(){
       alert("Clicked on Previous")
  }

  function handleNext(){
    alert("Clicked on Next")
  }


  return (
      <div className="steps" >
        <div className="numbers">
          <div className={`${count >= 1  ? "active" : ""}  `} >1</div>
          <div className={`${count >= 2  ? "active" : ""}  `} >2</div>
          <div className={`${count >= 3  ? "active" : ""}  `} >3</div>
        </div>

        <p className="message" >Step {count} :- {messages[count -1]} </p>

        <div className="buttons" >
          <button className="button" style={ {backgroundColor: "#77b3ec82", color: "#585d5e"}}
              onClick={handlePrevious}
          > <span> Previous </span> </button>
          <button className="button" style={ {backgroundColor: "#77b3ec82", color: "#585d5e"}}
               onClick={handleNext}
          > <span> Next </span> </button>
        </div>

      </div>
  );
}

export default App;
