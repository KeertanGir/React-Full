
import './index.css'



const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


        // name={pizzas.name} 
        //         ingrediants = {pizzas.ingrediants}
        //         price = {pizzas.price} 
        //         picloc={pizzas.photoName} 
        //         soldOut={pizza.soldOut}

function Pizza(props) {
  return (   
  <div className='pizza' >
    <img src={props.pizza.photoName} alt={props.pizza.name}></img>
    <div>
    <h3>{props.pizza.name}</h3>
    <p>{props.pizza.ingredients}</p>
    <p> {props.pizza.soldOut ? "Out of Stock" : "Available"  }</p>
    <span>{props.pizza.price}$</span>
    </div>
  </div> );
}

function Headers() {

  // const style = { color: "red", textTransform : "uppercase" , fontSize : "38px" };

  return ( 
    <header className='header' >
      <h1>Pizzalo React pizza Co.</h1> 
    </header>
  )
}

function Footer() {
  return ( <footer className='footer' > `{new Date().toLocaleTimeString()}  We are Open here `</footer> )
}

function Menu() {
  const pizza = pizzaData;
  return ( <main className='menu' > 
    <h2>Our Menu</h2> 
    <div className='pizzas' >
      {
        pizza.map((pizzas) => {
          return (
              <Pizza pizza={pizzas}  key={ pizzas.name }
                 />
          );
        })
      }
      


      {/* <Pizza 
        name="Focaccia" 
        ingrediants = "Bread with italian olive oil and rosemary" 
        price = {6} 
        picloc="pizzas/focaccia.jpg" 
        soldOut={false} />

      <Pizza 
        name="Pizza Margherita" 
        ingrediants = "Tomato and mozarella" 
        price = {10} 
        picloc="pizzas/margherita.jpg" 
        soldOut={true} />   */}
    </div> 
    </main> );
}


function App() {
  return (
    <div  className='container' >
    <Headers />
    <Menu  />
    <Footer />
    </div>
  );

}

export default App;
