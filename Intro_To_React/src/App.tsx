import { useCallback, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import { BsCalendar2DateFill } from "react-icons/bs";
import Counter from "./components/Counter/Counter";
import Like from "./components/Like/Like";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

const App = () => {
  let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];
  let students = [
    "Mr.Garby",
    "Jacqueline",
    "Blake",
    "Denise",
    "Aaron",
    "Principal Oshaughnessy",
    "Timothy",
  ];
  let cars = [
    "Toyota",
    "Acura",
    "Honda",
    "BMW",
    "Tesla",
    "Range Rover",
    "Mercedes",
  ];

  //creating a function
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    //console.log("Clicked from our helper function ");
    setAlertVisible(!alertVisible);
  };

  const [turnOn, setTurnOn] = useState(false);

  const [turnOff, setTurnOff] = useState(true);

  //creating new one
  // const [alertVisible, setAlertVisible] = useState(false)

  const [alertVisible, setAlertVisible] = useState(false);
  //const [firstName, setFirstName] = useState("Jose");
  
  //const [lastName, setLastName] = useState("Martinez");
  //const fullName = firstName + " " + lastName;

  const [person, setPerson] = useState({
    firstName: 'Jose',
    lastName: 'Martinez'
  })

  const handleClick2 = () => {
    setIsVisible(true);
    console.log(isVisible);
  };
  const [isVisible, setIsVisible] = useState(false);

  // return <div>Message</div>

  // HOW TO UPDATE AN ARRAY -----------------------------------------------

  // Create a useState to hold two strings in an array
  const [tags, setTags] = useState(['happy ', 'cheer ']);

  // create a helper function to add to our array with JavaScript
  const handleArray = () => {
    //tags.push('excite')
    setTags([...tags,'exciting ']);
    console.log(tags)
  }

  //Lets create a helper function to delete happy from this array
  const handleDelete = () => {
    setTags(tags.filter(tag => tag !== 'happy '));
  }
  
//let s create a helper function to update 'happy ' to 'happiness '
const handleUpdate = () => {
  setTags(tags.map(tag => tag == 'happy ' ? 'happiness ': tag));
} 
const [bugs, setBugs] = useState([
  {id: 1, title: ' bug 1 ', fixed: false},
  {id: 2, title: ' bug 2 ', fixed: false},
  {id: 3, title: ' bug 3 ', fixed: false}
])

const handleBug = () => {
  setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))
}

//how to share state with other components ___________________________________________


//lets create our useState for our cartItems hard code three items in an array
const [cartItem, setCartItem] = useState(['Product 1', 'Produect 2', 'Product 3'])


/// create a helper function to reset our cartItems
const resetCart = () => {
  setCartItem([]);

}



  return (
    <>
    <NavBar cartItemCount={cartItem.length}/>
    <Cart onReset={resetCart} cartItems={cartItem}/>

  {/* Like Icon Challenge */}
    <Like>
      


    </Like>







      <div>
        {/* <Alert text="This text is coming from my text prop Alert"/> */}
        {/* this is the css for the icon */}
        <BsCalendar2DateFill color="red" size={180} />

        {alertVisible ? <Alert>Passing in text as a child Alert!</Alert> : null}

        {turnOff ? null : (
          <Alert closingAlertButton={() => setTurnOff(true)}>
            Test Alert Trial Button!
          </Alert>
        )}

        {turnOn ? (
          <Alert closingAlertButton={() => setTurnOn(false)}>
            For the Alert Challenge Button...
          </Alert>
        ) : null}

        <Button onClickFunction={handleBug}>update Bug Button</Button>
        {bugs.map(bug => <p key={bug.id}>{bug.id} {bug.fixed ? 'fixed' : 'New'}</p>)}
        <Button onClickFunction={handleClick}>Array Add Button</Button>
        <br/>
        <Button onClickFunction={handleClick}>One Button</Button>
        <br/>
        <Button onClickFunction={handleClick}>Last name Button</Button>
        <br/>
        <Button onClickFunction={handleArray}>Array add button</Button><span>{tags}</span>

        <Button color="danger" onClickFunction={handleClick2}>
          Visible Button
        </Button>

        {/* Trial Alert Button Test */}
        <Button color="info" onClickFunction={() => setTurnOff(false)}>
          Trial Button
        </Button>

        {/* Alert Button  */}
        <Button color="success" onClickFunction={() => setTurnOn(true)}>
          Alert Button
        </Button>

        {/* Jose Martinez  */}
        {person.firstName} {person.lastName}
        <Counter />

        <ListGroup
          onSelectedItem={handleSelectItem}
          items={items}
          heading="Cities"
        />

        <ListGroup
          onSelectedItem={handleSelectItem}
          items={students}
          heading="Students"
        />

        <ListGroup
          onSelectedItem={handleSelectItem}
          items={cars}
          heading="cars"
        />
      </div>

      <div>
        <MyuseStateExample />
      </div>
    </>
  );
};

export default App;
