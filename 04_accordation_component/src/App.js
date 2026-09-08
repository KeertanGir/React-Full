import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {

   const [curSelected , setCurSelected] = useState(  )

  return ( 
  <div className="accordion" >
    
    { 
     faqs.map( (item , i )=>
      <AccordionItem  
        num={i+1} 
        title={item.title}   
        key={i} 
        curOpen={curSelected}
        setCurOpen={setCurSelected}
        > 
        { item.text } 
      </AccordionItem> 
     )
    } 
  </div>
  )
}

function AccordionItem( { num , title , curOpen, setCurOpen ,children  } ){

  const isOpen = num === curOpen;

  function handleIsOpen(){
    setCurOpen(num)
  }

  return (
    <div className={ `item ${ isOpen ? "open" : "" }` }   onClick={handleIsOpen} >
      <p className="number" > {num < 9 ? ("0" + num ) : ( num ) } </p>  
      <p className="title" > { title } </p>
      <p className="icon" > {isOpen ? "-" : "+" } </p>
      { isOpen && <p className="content-box" > {children} </p> }

    </div>   
  )
}


