import { useState } from "react";


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Bag", quantity: 2, packed: false },
  { id: 4, description: "Charger", quantity: 12, packed: true },

];



export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList />
      <Status />

    </div>
  );
}


function Logo() {

  return (<h1> 🌴 Fly Away 💼 </h1>)

}




function Form() {

  const [description, setDescription] = useState("");
  const [items, setItems] = useState(0);


  // yeh function Form Submit ko handle krta hy
  function handleOnSubmit(e) {
  e.preventDefault();

  if(!description) return;

  const newItem = { description , items, packed: false , id: Date.now() } 

  console.log(newItem);

  setDescription("");
  setItems(1);
}

  return (
    <form className="add-form" onSubmit={ handleOnSubmit } >
      <h3> What You need for your ✈ trip </h3>
      <select value={items} onChange={(e) => {
        console.log(e.target.value)
        setItems( Number( e.target.value ))}}  >
        { Array.from( {length : 20}, (_, i)  => i + 1).map( num => (
            <option value={num} key={num} > {num} </option>
        ))}
      </select>
      <input 
      type="text" 
      placeholder="Enter Item Name"
      value={description}
      onChange={ (e) => {
        console.log(e.target.value)
        setDescription(e.target.value)} }
      /> 
      <button>Add</button>
    </form>)
}

function PackageList() {
  return (

    <div className="list" >
      <ul>
        { initialItems.map((item) => 
        <Item item={item} key={item.id}/> )}
      </ul>
    </div>

  )

}

function Item({ item }) {
  return (
    <li >
        <span style={ 
          item.packed ?
           { textDecoration: "line-through" }  
           : {} 
           } > {item.quantity} {item.description} </span>
        <button> ❌ </button>
     </li>
    
  )
}


function Status() {
  return (
    <footer className="stats" >
      <em> You have X items on your List. and Your %X packing is Complete </em>
    </footer>)

}

