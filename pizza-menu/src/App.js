
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
    <Pizza />
    <Pizza />
    <Pizza />
    <Pizza />
    <Pizza />  
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
