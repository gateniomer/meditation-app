import {useEffect, useState} from 'react'; 
import Button from '../button/button.component'; 
import {ReactComponent as ExerciseLogo} from '../../assets/placeholder.svg';

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
    return <span className='text-5xl mb-10 text-white font-semibold'>
      {(minutes.toString().length === 1) ?
      `0${minutes}` : minutes}
      :
      {(seconds.toString().length === 1) ? `0${seconds}` : seconds}
      </span>;
  }
  return (
    <div className="flex flex-col mx-auto justify-center items-center ">

      {console.log('Stopwatch rendered',time)}

      <ExerciseLogo className="w-48 h-48 mb-3"/>
      {printTime()}
      <div className='flex'>
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
    </div>
  )
}

export default CountDownTimer;