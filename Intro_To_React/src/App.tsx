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

  // return <div>Message</div>
  return (
    <>
      <div>
        {/* <Alert text="This text is coming from my text prop Alert"/> */}

        <BsCalendar2DateFill color="red" size={180} />
        <Alert>Passing in text as a child Alert!</Alert>
        <Alert>For the Alert Challenge Button...</Alert>

        <Button onClickFunction={handleClick}>One Button</Button>
        <Button color="danger" onClickFunction={handleClick}>
          Two Button
        </Button>
        <Button color="success" onClickFunction={handleClick}>
          Three Button
        </Button>

        <Button color="success" onClickFunction={handleClick}>
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
