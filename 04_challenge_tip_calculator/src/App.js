import { useState } from "react";


function App() {
  return(
    <div>
      <TipCalculator/>
    </div>
  )
}


function TipCalculator(){

  const [bill, setBill] = useState("")
  const [ yourTip, setYourTip ] = useState(0);
  const [ yourFriendTip, setYourFriendTip ] = useState(0);

  
  // const  yourtip = (bill * yourTip / 100)
  // const  friTip = (bill * yourFriendTip / 100)

  const tip = bill * ( yourTip + yourFriendTip ) / 2 / 100;

function handleReset(){
    setBill("")
    setYourTip(0)
    setYourFriendTip(0)
  }

  return (
    <div>
      <BillInput bill={ bill } onChangeBill={ setBill } />
      <SelctList tip={ yourTip } setTip={ setYourTip } >How will you wnat to give tip</SelctList>
      <SelctList tip={ yourFriendTip } setTip={ setYourFriendTip }>How will your Friend wnat to give tip</SelctList>
       { bill > 0 && 
       <> 
       <OutPut bill={ bill } tip={tip} />
      <Reset handleReset={ handleReset }  />
      </>
       }
    </div>
  );
}

function BillInput( { bill , onChangeBill } ){
  return (
  <div>
    <label> How Much your Bill is </label>
    <input type="text" placeholder="Bill value" value={bill} onChange={ e => onChangeBill( Number(e.target.value)) } />
  </div>
  )

}

function SelctList( { tip, setTip , children} ){
  return(
    <div>
       {children }
        <select value={tip} onChange={ (e) => setTip( Number( e.target.value ))} >
          <option value={0} >disappointed 0%</option>
          <option value={5} >It was Good 5%</option>
          <option value={10} >Amazing 10%</option>
          <option value={20} >Un Beleaveable  20%</option>
        </select>
    </div>
  )
}

function OutPut( { bill , tip} ){
  return(
    <div>
      <h2> { `You Pay Total is ${ bill + tip }  ( ${bill}$ + ${tip}$ tip )`  }</h2>
    </div>
  )
}

function Reset( { handleReset } ){
    return(
      <button onClick={ handleReset } >Reset</button>
    )
}

export default App;
