import { useState } from "react";

const CounterBox = (props) => {
  const [value,setValue] = useState(props.value);
  const maxValue = props.max ? props.max : 60;
  const append = () => {
    setValue(value =>{
      if(value === maxValue) return 0;
      return value+1; 
    });
  }

  const subtract = () =>{
    setValue(value => {
      if(value === 0) return maxValue;
      return value-1;
    })
  }
  return (
    <div className="flex">
      <button onClick={subtract} className="bg-gray-500 w-12 text-center rounded-l-lg">-</button>
      <div className="flex bg-gray-400 w-12 h-12 justify-center items-center text-xl">{value}</div>
      <button onClick={append} className="bg-gray-500 w-12 text-center rounded-r-lg">+</button>
    </div>
  )
}

export default CounterBox;