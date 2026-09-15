import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function Button({ onClick , children }){
  return <button className="button" onClick={onClick}>{children}</button>

}


function App() {

  const [Friends, setFriends] = useState(initialFriends)


  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowForm(){
    setShowAddForm(show => !show)
    // setSelectedFriend(null)
  }

  function handleAddFriends(newFriend){
    setFriends(friend => [...friend , newFriend])
    setShowAddForm(false)
  }

  function handleSelectedFriend(friend){
    setSelectedFriend((cur) => cur?.id === friend.id ? null : friend)
    setShowAddForm(false)
  }

  return (
    <div className="app" >
      <div className="sidebar" >
        <FriendList 
          Friends={Friends} 
          selectedFriend={selectedFriend}
          selectFriend={ handleSelectedFriend }
          />
        { showAddForm &&
          <FormAddFriend addFriend={handleAddFriends}  />
        }
        <Button onClick={handleShowForm} >{ showAddForm ? "Close" : "Add Friend" }</Button>
      </div>
      { 
       selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />
      }
    </div>

  );
}

function FriendList( { Friends , selectedFriend ,selectFriend} ) {
  return <ul>
    {
      Friends!==null  && Friends.map(dost => <Friend 
        friend={dost} 
        key={dost.id} 
        selectFriend={selectFriend} 
        selectedFriend={selectedFriend} />)
    }

  </ul>
}

function Friend({ friend, selectFriend , selectedFriend }) {

   const isSeleted = friend.id === selectedFriend?.id

  return <li className={isSeleted ? "selected" : ""} >
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>

    {
      friend.balance < 0 && <p className="red" > You owe { friend.name } ${ Math.abs( friend.balance ) } </p>
    }
    {
      friend.balance > 0 && <p className="green" > { friend.name } owes you  ${ Math.abs( friend.balance ) } </p>
    }
    {
      friend.balance === 0 && <p> You and { friend.name } both are even </p>
    }
    <Button onClick={() => selectFriend(friend)} > { isSeleted ? "close" : "Select" }</Button>
  </li>
}



function FormAddFriend({ addFriend }){

  const [name, setName] = useState('');
  const [image, setImage] = useState("https://i.pravatar.cc/48")

  function handleSubmitForm( e ){
      e.preventDefault();
    
      if( !name || !image ) return;

      const id = crypto.randomUUID();
      const friend = {
        id,
        name ,
        image: `${image}?u=${id}` ,
        balance : 0 
      }

      addFriend(friend)


      setName('')
      setImage("https://i.pravatar.cc/48")


  }


  return <form className="form-add-friend" onSubmit={ handleSubmitForm } >
    
    <label>👨🏻‍🤝‍👨🏻Friend name</label>
    <input  type="text" value={name} onChange={(e) => setName( e.target.value )} />

    <label>📷Image URL</label>
    <input type="text" value={image} onChange={(e) => setImage( e.target.value ) } />

    <Button>Add</Button>
  </form>
}

function FormSplitBill({ selectedFriend }){

  const [bill, setBill] = useState(""); 
  const [paied, setpaied] = useState("");

  const paiedByFriend = bill ?  bill - paied : "";

  const [whoIsPaid, setWhoIsPaied] = useState("user");

  return <form className="form-split-bill" >
    <h2>Split Bill With {selectedFriend?.name}</h2>
    <label>💳Bill Value</label>
    <input type="text" value={bill} onChange={ (e) => setBill(e.target.value) }/>
    
    <label>💵Your Expense</label>
    <input type="text" value={paied} 
      onChange={ (e) => 
        setpaied( Number(e.target.value) > bill ? paied : Number(e.target.value) ) } 
      />
    
    <label>👬{selectedFriend.name}'s Expense</label>
    <input type="text" disabled value={paiedByFriend} />
    
    
    <label>🤑Who is paying Bill</label>
    <select value={whoIsPaid} onChange={ (e) => setWhoIsPaied(e.target.value) } >
      <option value="user" >You</option>
      <option value="friend" >{selectedFriend.name}</option>
    </select>
    <Button>Split Bill</Button>

  </form>
}



export default App;
