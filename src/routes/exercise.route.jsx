import CountDownTimer from "../components/countDownTimer/countDownTimer.component";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SummaryPopup from "../components/summaryPopup/summaryPopup.component";
import sound from '../assets/finished.mp3';
import { useEffect } from "react";


const Exercise = () => {
  const [isFinished, setIsFinished] = useState(false);
  const {state} = useLocation();
  const {time,exercise} = state;

  //Play sound when countdown is finished
  const onCountDownTimerFinish = () => {
    setIsFinished(true);
    var audio = new Audio(sound);
    audio.play();
  }

  //Keep screen on with WakeLock API
  let wakeLock = null;
  useEffect(()=>{
    requestWakeLock();
    //when page is visible, request wakelock again
    window.addEventListener('visibilitychange',handleVisivilityChange);
    return ()=>{
      //release wakelock when component is unmounted
      if(wakeLock !==null) wakeLock.release();
      //remove wakelock listiner
      window.removeEventListener('visibilitychange',handleVisivilityChange)
    }
  },[])

  //if page is visible, request wakelock again
  const handleVisivilityChange = () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
      requestWakeLock();
    }
  }

  //request to keep screen awake from wakelock api
  const requestWakeLock = async () => {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
    } catch (err) {
      console.log(err);
    }
  }//requestWakeLock()
  
  
  return (
    <div className="page bg-main">
      <div className="container max-w-[400px] animate-growOnce">
      <h2 className="text-center text-5xl text-white font-bold font-Lobster">{exercise.title} {exercise.emoji}</h2>
      <br />
      <h3 className="text-center text-white max-w-sm italic mx-auto">{exercise.shortDescription}</h3>
      <br />
      <CountDownTimer 
      howLong={time} 
      onFinish={onCountDownTimerFinish}
      />
      </div>
      {isFinished && <SummaryPopup state={state}/>}
    </div>
  )
}

export default Exercise;