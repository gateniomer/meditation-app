import CountDownTimer from "../components/countDownTimer/countDownTimer.component";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SummaryPopup from "../components/summaryPopup/summaryPopup.component";
import sound from '../assets/finished.mp3';


const Exercise = (props) => {
  const [isFinished, setIsFinished] = useState(false);
  const {state} = useLocation();
  const {time,exercise} = state;
  const onCountDownTimerFinish = () => {
    setIsFinished(true);
    var audio = new Audio(sound);
    audio.play();
  }

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