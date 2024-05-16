import { useCallback, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import { BsCalendar2DateFill } from "react-icons/bs";
import Counter from "./components/Counter/Counter";
import Like from "./components/Like/Like";

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
  return (
    <>
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

        <Button onClickFunction={handleClick}>One Button</Button>

        <Button onClickFunction={handleClick}>Last name Button</Button>

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
