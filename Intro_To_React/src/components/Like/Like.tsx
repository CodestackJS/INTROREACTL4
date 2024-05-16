import { useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

const Like = () => {
  //creating useState
  const [fillIcon, setFillIcon] = useState(false);

  return (
    <>
         {/* Unfilled thumbs up icon from react-icon site - "Like"  */}
    {fillIcon? <AiFillLike onClick={() => setFillIcon(false)} size={180} />: <AiTwotoneLike onClick={() => setFillIcon(true)} size={180} /> }
 
      {/* Filled thumbs up icon version from react-icon site */}
      
      
      {/* 
    - when unfilled icon is clicked - it will show the filled version of the icon
    - when filled icon is clicked - it will return back to original unfilled version
    -creating a boolean to toggle using useState

    */}
    </>
  );
};

export default Like;
