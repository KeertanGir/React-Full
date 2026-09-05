// import the useState Hook from the rect 
import { useState } from "react";

import Logo from "./components/Logo";
import PackageList from "./components/PackageList";
import Form from "./components/Form";
import Status from "./components/Status";

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

  const [items, setItems] = useState([]);



  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearAll() {

    const confromed = window.confirm("Are you sure To delete the Whole List of items!");

    if (confromed) {
      setItems([]);
    }
  }



  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackageList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearAll={handleClearAll} />
      <Status items={items} />
    </div>
  );
}
