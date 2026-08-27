// import the useState Hook from the rect 
import { useState } from "react";

// inital items Array containing JS objects
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Bag", quantity: 2, packed: false },
//   { id: 4, description: "Charger", quantity: 12, packed: true },
// ];


// creating app Component That is The responsible of the Whole React application.
// isko create krne k sath sath ki Export kr rahy hain.
// this is the main second Parent Component after index.js .
export default function App() {

  const [items, setItems] = useState( [] );

    function handleAddItems(item){
      setItems([...items, item]);
    }

    function handleDeleteItem(id){
      setItems( (items) => items.filter( (item) => item.id !== id ));  
    }

    function handleToggleItem(id){
      setItems( (items) => items.map( (item) => 
        item.id === id ? { ...item, packed: !item.packed }  :  item) )
    }



  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackageList items= { items}  onDeleteItem={ handleDeleteItem } onToggleItem={ handleToggleItem } />
      <Status />

    </div>
  );
}


// This is the component for the logo. normally logos was the icons but here we use simple text
function Logo() {

  return (<h1> 🌴 Fly Away 💼 </h1>)

}



// this is the main component that handle the All Form and user intraction and it is responsible for the 
// creating items and other things.
// We can also pass the state through the props
function Form( { onAddItems } ) {

  // here we declare the states and uses the useState("") hook that we import from the react and destructre that
  // arry and use them in out this components
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
 


// this funtion is responsible for the handling the submition of the Form
  function handleOnSubmit(e) {
  
    // this is responsiple making this componet prevent from the default setting of the form.
    // like isme yeh hy k yeh page ko submission ke bad reload krne se rokta hy
  e.preventDefault();

  

  // simple JS - custom validation that helps to stop the empty entries
  if(!description) return;

  // creating new object for the item
  const newItem = { description , quantity, packed: false , id: Date.now() } 


  onAddItems(newItem);

  console.log(newItem);

  // making states on the initial states
  setDescription("");
  setQuantity(1);

  // this the concept of the Controlled Elements in which we controls the form elements 

}


// here we are returning the component in JSX format
  return (
    <form className="add-form" onSubmit={ handleOnSubmit } >

      <h3> What You need for your ✈ trip </h3>

      {/* controlling Elements with the use of state and the value and onchange props in these elements */}
      <select value={quantity} onChange={(e) => {
        setQuantity( Number( e.target.value ))}}  >


          {/* rendring the quantity options in dunamic way */}
        { Array.from( {length : 20}, (_, i)  => i + 1).map( num => (
            <option value={num} key={num} > {num} </option>
        ))}

      </select>
      
      {/* same as upside */}
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

function PackageList( { items , onDeleteItem, onToggleItem } ) {
  return (
//  returning the list dynamically
    <div className="list" >
      <ul>
        { items.map((item) => 
        <Item item={item} key={item.id} onDeleteItem = {onDeleteItem} onToggleItem={ onToggleItem } /> )}
      </ul>
    </div>

  )

}

// Component for the items
function Item({ item , onDeleteItem, onToggleItem }) {
  return (
    <li >

        <input type="checkbox" value={item.packed} onClick={ () => onToggleItem(item.id) }  />
      {/* applying the Styling on the conditions packed or not */}
        <span style={ 
          item.packed ?
           { textDecoration: "line-through" }  
           : {} 
           } > {item.quantity} {item.description} </span>
        <button onClick={ () =>  onDeleteItem(item.id)} > ❌ </button>
     </li>
    
  )
}

// here is the component for the footer
function Status() {
  return (
    <footer className="stats" >
      <em> You have X items on your List. and Your %X packing is Complete </em>
    </footer>)

}

