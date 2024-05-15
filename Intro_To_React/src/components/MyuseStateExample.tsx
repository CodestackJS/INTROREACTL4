//rafce tab


import React, { useState } from 'react'

const MyuseStateExample = () => {

    const [name, setName] = useState("Guest");
      //function [name,setName]
      const updateName = () => {
        setName("Donatello");
        console.log(name);
    }



    const [age, setAge] = useState(50);
    //function for [age,setAge]
    const incrementAge = () => {
        setAge(age+1);
    }

    return (
        <>
    
        <div><p>Name: {name}</p></div>
        <button className="btn-btn-secondary" onClick={updateName}>set Name</button>
        
        <div><p>Age: {age}</p></div>
        <button className="btn btn-secondary" onClick={incrementAge}>Increment Age</button>

        
        </>
        
      )


}





export default MyuseStateExample