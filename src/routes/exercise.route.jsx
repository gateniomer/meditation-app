import CountDownTimer from "../components/countDownTimer/countDownTimer.component";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SummaryPopup from "../components/summaryPopup/summaryPopup.component";


const Exercise = (props) => {
  const [isFinished, setIsFinished] = useState(false);
  const {state} = useLocation();
  const {time,exercise} = state;

  const onCountDownTimerFinish = () => {
  setIsFinished(true);
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full min-h-screen flex justify-center items-center">
      {isFinished && <SummaryPopup state={state}/>}
      <div className="bg-slate-400 rounded-3xl shadow-lg px-4 py-8 mx-3 border-[7px] border-gray-600">
      <h2 className="text-center text-5xl text-white font-bold font-Lobster">{exercise.title} {exercise.emoji}</h2>
      <br />
      <h3 className="text-center text-white max-w-sm italic mx-auto">{exercise.shortDescription}</h3>
      <br />
      <CountDownTimer 
      howLong={time} 
      onFinish={onCountDownTimerFinish}
      />
      </div>
    </div>
  )
}

export default Exercise;