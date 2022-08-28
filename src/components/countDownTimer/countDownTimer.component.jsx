import {useEffect, useState} from 'react'; 
import Button from '../button/button.component'; 

export const CountDownTimer = ({howLong,onFinish}) =>{
  const [time,setTime] = useState(howLong);
  const [isRunning,setIsRunning] = useState(false);

  useEffect(()=>{
    let interval = null;
    if(isRunning)
      interval = setInterval(()=> updateTime(interval),1000);
    
    return () => {
      console.log('return effect')
      clearInterval(interval)}
  },[isRunning]);

  const updateTime = () => {
    setTime((prev)=> {
      if(prev > 1){
        return prev-1;
      }else{
        setIsRunning(false);
        onFinish();
        return 0;
      }
    })
  }
  const printTime = () => {
    const minutes = Math.floor(time/60);
    const seconds = time-minutes*60;
    return <h1>
      {(minutes.toString().length === 1) ?
      `0${minutes}` : minutes}
      :
      {(seconds.toString().length === 1) ? `0${seconds}` : seconds}
      {/* {(seconds.toString().length === 1) ?
      `0${seconds}` : {seconds}} */}
      </h1>;
  }
  return (
    <div className="bg-slate-600 block text-center mx-auto w-20 my-3 text-white p-2 rounded">

      {console.log('Stopwatch rendered',time)}

      {printTime()}
      
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