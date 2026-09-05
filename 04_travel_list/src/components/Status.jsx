// here is the component for the footer
function Status({ items }) {


  if (!items.length) {
    return (
      <footer className="stats" >
        <em> Add Items In your list! ✨ </em>
      </footer>
    )
  }


  const itemCount = items.length;
  const packed = items.filter(item => item.packed === true).length;
  const percentage = (packed / itemCount * 100);

  return (
    <footer className="stats" >
      {
        percentage === 100 ?
          (<em> Packing is Completed, You are Ready to Go! ✈ </em>)
          :
          (<em> You have {itemCount} items on your List. You pack {packed} items!  Your  {Math.round(percentage)} % packing is Complete </em>)
      }
    </footer>)

}

export default Status;