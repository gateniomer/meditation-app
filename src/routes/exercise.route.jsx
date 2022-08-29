import CountDownTimer from "../components/countDownTimer/countDownTimer.component";

const Exercise = () => {

  const onCountDownTimerFinish = () => {
    console.log('Finished!');
  }
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen">
      <CountDownTimer 
      howLong={3} 
      onFinish={onCountDownTimerFinish}
      />
      
    </div>
  )
}

export default Exercise;