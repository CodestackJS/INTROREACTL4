import { useState } from "react";
import Styles from "./Counter.module.css";

const Counter = () => {
  //let counter = 0

  // we need a use state
  const [counter, setCounter] = useState(0);

  //one functions on to handle our increment
  const handleIncrement = () => {
    //counter++;
    // setCounter(counter + 1)
    setCounter((prevCount) => prevCount + 1);
    // setCounter(prevCount => prevCount + 1)
    console.log(counter);
  }

  const handleDecrement =() => {
    //do a quick check if counter is greater than 0
    if(counter > 0)
        {
    setCounter((prevCount) => prevCount -1);
    console.log(counter)
        }
  }

  // one function to handle our decrement

  return (
    <>
      {/* two buttons one to increment and one to decrement */}

      <button className={Styles["btnPrimary"]} onClick={handleIncrement}>+</button>
      <span>{counter}</span>
      <button className={Styles["btnSecondary"]} onClick={handleIncrement}>-</button>

      {/* render the count somwhere */}
    </>
  );
};

export default Counter;
