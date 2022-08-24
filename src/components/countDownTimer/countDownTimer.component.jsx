import {useEffect, useState} from 'react'; 
import Button from '../button/button.component'; 

export const CountDownTimer = ({howLong}) =>{
  const [time,setTime] = useState(howLong);
  const [isRunning,setIsRunning] = useState(false);

  useEffect(()=>{
    let interval = null;
    if(isRunning){
      interval = setInterval(()=> updateTime(interval),1000);
    }else{
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  },[isRunning]);

  const updateTime = (interval) => {
    setTime((prev)=> {
      if(prev > 1){
        return prev-1;
      }else{
        clearInterval(interval);
        setIsRunning(false);
        return 0;
      }
    })
  }

  return (
    <div className="bg-slate-600 block text-center mx-auto w-20 my-3 text-white p-2 rounded">

      {console.log('Stopwatch rendered',time)}

      <h1>{time}</h1>
      
      {!isRunning && time === howLong && <Button 
      onClickHandler={()=> setIsRunning(true)}>Start</Button>}

      {isRunning && time >0 && <Button 
      onClickHandler={()=> setIsRunning(false)}>Stop</Button>}

      
      {!isRunning && time >0 && time !== howLong && <Button 
      onClickHandler={()=> setIsRunning(true)}>Resume</Button>}

      {(isRunning || time !==howLong) && <Button 
      onClickHandler={()=>{
        setTime(howLong)
        setIsRunning(false)}}>Reset</Button>}
      
    </div>
  )
}

export default CountDownTimer;