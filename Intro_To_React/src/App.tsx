import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import { BsCalendar2DateFill } from "react-icons/bs";

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
    console.log("Clicked from our helper function ");
  };


const [turnOn, setTurnOn] = useState(true)

  // return <div>Message</div>
  return (
    <>
      <div>
        {/* <Alert text="This text is coming from my text prop Alert"/> */}

        <BsCalendar2DateFill color="red" size={180} />

       {turnOn?<Alert closingAlertButton = {() => setTurnOn(false)}> Passing in text as a child Alert!.</Alert>:null }
        
        
        {turnOn?<Alert closingAlertButton = {() => setTurnOn(false)} >For the Alert Challenge Button...</Alert>:null }


        <Button onClickFunction={handleClick}>One Button</Button>
        <Button color="danger" onClickFunction={handleClick}>
          Two Button
        </Button>

        {/* Trial Alert Button Test */}
        <Button color="info" onClickFunction={() => setTurnOn(true)}>
          Trial Button
        </Button>

        {/* Alert Button  */}
        <Button color="success" onClickFunction={() =>setTurnOn(true)}>
          Alert Button
        </Button>

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
