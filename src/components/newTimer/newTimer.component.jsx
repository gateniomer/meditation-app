import { useState } from "react";

const NewTimer = ({value}) => {
  const [time,setTime] = useState(value ? value : 10);
  const [isRunning,setIsRunning] = useState(false);
  let timeout;

  if(isRunning) timeout = setTimeout(()=>{
    if(time>0 && isRunning) setTime(time=>{
      time-=1
      if(time===0) console.log('finished!');
      return time;
    }
      );
  },1000);

  const onClickHandler = () => {
    setIsRunning(isRunning => !isRunning);
    clearTimeout(timeout);
  }
  
  const onFinish = () => {
    setIsRunning(false);
    clearTimeout(timeout);
    setTime(value);
  }
  return (
    <div>
      {console.log('time',time)}
      <h2>{time}</h2>
      {time === value && !isRunning &&
      <button onClick={onClickHandler}>Start</button>}
      {isRunning && 
      <button onClick={onClickHandler}>Stop</button>}
      {time<value && !isRunning && 
      <button onClick={onClickHandler}>Resume</button>}
      {time<value && 
      <button onClick={onFinish}>Finish</button>}
    </div>
  )
}

export default NewTimer;