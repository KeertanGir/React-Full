

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
  return (
    <div className="add-form" >
      <h3> What You need for your ✈ trip </h3>
    </div>)
}

function PackageList() {
  return (

    <div className="list" >
      <ul>
        { initialItems.map((item) => 
        <Item item={item} /> )}
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

