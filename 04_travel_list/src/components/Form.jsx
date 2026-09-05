import { useState } from "react";


// this is the main component that handle the All Form and user intraction and it is responsible for the 
// creating items and other things.
// We can also pass the state through the props
function Form({ onAddItems }) {

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
    if (!description) return;

    // creating new object for the item
    const newItem = { description, quantity, packed: false, id: Date.now() }


    onAddItems(newItem);

    console.log(newItem);

    // making states on the initial states
    setDescription("");
    setQuantity(1);

    // this the concept of the Controlled Elements in which we controls the form elements 

  }


  // here we are returning the component in JSX format
  return (
    <form className="add-form" onSubmit={handleOnSubmit} >

      <h3> What You need for your ✈ trip </h3>

      {/* controlling Elements with the use of state and the value and onchange props in these elements */}
      <select value={quantity} onChange={(e) => {
        setQuantity(Number(e.target.value))
      }}  >


        {/* rendring the quantity options in dunamic way */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num} > {num} </option>
        ))}

      </select>

      {/* same as upside */}
      <input
        type="text"
        placeholder="Enter Item Name"
        value={description}
        onChange={(e) => {
          console.log(e.target.value)
          setDescription(e.target.value)
        }}
      />
      <button>Add</button>
    </form>)
}

export default Form;