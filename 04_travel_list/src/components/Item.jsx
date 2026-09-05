// Component for the items
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li >

      <input type="checkbox" value={item.packed} onClick={() => onToggleItem(item.id)} />
      {/* applying the Styling on the conditions packed or not */}
      <span style={
        item.packed ?
          { textDecoration: "line-through" }
          : {}
      } > {item.quantity} {item.description} </span>
      <button onClick={() => onDeleteItem(item.id)} > ❌ </button>
    </li>

  )
}

export default Item;