//rfce tab
//rafce tab
import styles from './ListGroup.module.css'
import { useState } from "react";
//Typescript has a feature called interface
//using an interface we can define the shape of our objects
//{items: [], heading :string}

interface ListProps {
  items: string []
  heading: string
  onSelectedItem: (item:string) => void
}


// import { Fragment } from "react/jsx-runtime";


const ListGroup = ({items,heading,onSelectedItem}:ListProps) => {

  const [selectedIndex, setSelectedIndex] = useState(0);


//set a useState kindof creating a variable
const [name, setName] = useState("David");


  // const updateIndex = () =>
  // {
  //   setSelectedIndex()
  // }
  //let selectedIndex = 0;

// const arr = useState(0);
//   console.log(arr);

  //Event handler which is a function to handle an event
  // const handleClick = (e: React.MouseEvent) => {
  //   console.log(e.target.innerText);
  // };

  //items = [];

  // const updateIndex = () => 
  //   {
  //     let index = 0;
  //     setSelectedIndex(index);
  //     console.log(selectedIndex);
  //   }

  //function 
  // const updateIndex = (index:any) => 
  //   {
  //     setSelectedIndex(index);
  //     console.log(selectedIndex);
  //   }

  const getMessage = () => {
    return items.length == 0 ? <p> No Items found </p> : null;
  };



  return (
    //JSX we must have one parent element. Example div, Fragment or <></>
    
    //Fragment = <>
    <> 
      <h1>{heading}</h1>
      {getMessage()}
      {/* {items.length ==0 ? <p>No Items Found</p> : null} */}
      <ul className={[styles.ListGroup,styles.container].join('')}>
        {items.map((item, index) => (
          <li
            className={selectedIndex == index
              ? styles['listGroupItem' ]//highliting the list
              : styles['listGroupItem']
            } 
              
            key = {index}
            onClick={() => {setSelectedIndex(index)
                onSelectedItem(item)
            } } 
          >
            {item}
          </li>

        ))}
      </ul>

      <p>{name}</p>
      <button className="btn btn-primary" onClick={() => setName("Neo")}>Update to New Name</button>


    </>
  );
};

export default ListGroup;
