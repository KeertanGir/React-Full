import './App.css';
import './index.css'

function Pizza() {
  return ( <div>
    <img src='pizzas/focaccia.jpg' alt='focaccia'></img>
    <h1>Name : Focaccia </h1>
    <p>Ingrediants : Bread with italian olive oil and rosemary</p>
    <p>Price : 6$</p>
    <p>soldOut : false</p>
  </div> );
}

function App() {
  return (
    <>
    <h1>Pizza Shop</h1>
    <Pizza />
    <Pizza />
    <Pizza />
    <Pizza />
    <Pizza />
    </>
  );

}

export default App;
