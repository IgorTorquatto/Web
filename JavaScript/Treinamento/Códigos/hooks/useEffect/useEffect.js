import React from "react";
import { useEffect,useState } from "react";

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });
  
    return <h1>I've rendered {count} times!</h1>;
}

export default UseEffect