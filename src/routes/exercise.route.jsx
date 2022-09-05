import CountDownTimer from "../components/countDownTimer/countDownTimer.component";
import { useLocation } from "react-router-dom";


const Exercise = (props) => {
  const {state} = useLocation();
  const {time,exercise} = state;

  const onCountDownTimerFinish = () => {
    console.log('Finished!');
  }
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen flex flex-col justify-center">
      <h2 className="text-center text-4xl text-white font-bold">{exercise.title}</h2>
      <h3 className="text-center text-white max-w-md italic mx-auto">{exercise.shortDescription}</h3>
      <CountDownTimer 
      howLong={time} 
      onFinish={onCountDownTimerFinish}
      />
      
    </div>
  )
}

export default Exercise;