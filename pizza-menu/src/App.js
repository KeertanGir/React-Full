
import './index.css'

function Pizza(props) {
  return ( <div className='pizza' >
    <img src={props.picloc} alt={props.name}></img>
    <div>
    <h3>{props.name}</h3>
    <p>{props.ingrediants}</p>
    <p> {props.soldOut ?  "Available" : "Out of Stock" }</p>

    <span>{props.price}$</span>
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
  return ( <main className='menu' > 
    <h2>Our Menu</h2>  
    <Pizza 
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
      soldOut={true} />  

    </main> );
}


function App() {
  return (
    <div  className='container' >
    <Headers />
    <Menu />
    <Footer />
    </div>
  );

}

export default App;
