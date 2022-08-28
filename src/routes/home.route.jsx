import CountDownTimer from "../components/countDownTimer/countDownTimer.component";
import {useState} from 'react';
import EXERCISES from '../exercises';

const Home = () => {

  const [exerciseSelected,setExericeSelected] = useState(EXERCISES.MEDITATE);

  const onCountDownTimerFinish = () => {
    console.log('finished!');
  }
  return(
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen">
      <CountDownTimer 
      howLong={3} 
      onFinish={onCountDownTimerFinish}
      />
      
    </div>
  )
}
export default Home;