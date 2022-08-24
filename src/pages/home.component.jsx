import CountDownTimer from "../components/countDownTimer/countDownTimer.component";
import {useState} from 'react';

const Home = () => {
  const [isCountDownTimerRunning,setIsCountDownTimerRunning] = useState(false);

  const onClickHandler = () => {
    setIsCountDownTimerRunning((prev) => !prev);
  }
  const onCountDownTimerFinish = () => {
    console.log('finished!');
    setIsCountDownTimerRunning(false);
  }
  // onCountDownTimerFinish.bind(this);
  return(
    <div>
      {console.log('Home Page rendered!')}
      <CountDownTimer 
      howLong={3} 
      start={isCountDownTimerRunning}
      onFinish={onCountDownTimerFinish}
      />
      
    </div>
  )
}
export default Home;