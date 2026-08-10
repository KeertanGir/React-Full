
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

  const hr = new Date().getHours();
  const startHr = 12;
  const closedHr = 22;
  const isOpen = hr >= startHr && hr <= closedHr ; 
  // {new Date().toLocaleTimeString()} 
  console.log(isOpen)
  return ( <footer className='footer' >
  
    { isOpen && <div className='order'>
          <p>We are Open till {closedHr}:00 please Order Between {startHr}:00 to {closedHr}:00  </p>
          <button className='btn' >Order</button>
        </div>
    }
     </footer> )
}

function Menu() {
  const pizza = pizzaData;
  // const pizzaLen = 0; 
  const pizzaLen = pizza.length; 

  return ( <main className='menu' > 
    <h2>Our Menu</h2> 
    <div className='pizzas' >

      {
        pizzaLen > 0 &&  pizza.map((pizzas) => {
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
