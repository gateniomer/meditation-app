import { timeFormat } from '../../utils/utils';
import { useNavigate } from "react-router-dom";
import {saveExerciseToLocalStorage} from "../../utils/utils";
import Button from "../button/button.component";

const SummaryPopup = ({state}) => {
  const time = timeFormat(state.time);
  let navigate = useNavigate();

  const onDiscardHandler = () => {
    navigate('/');
  }
  const onSaveHandler = () => {
    const date = new Date();
    const dateFormat = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()<10?'0':''}${date.getMinutes()}`;
    saveExerciseToLocalStorage({date:dateFormat,...state});
    navigate('/',{state});
  }

  return (
  <div className="bg-black bg-opacity-60 text-white absolute w-full h-screen flex flex-col items-center justify-center">
    <div className='bg-blue-500 shadow-lg border-[7px] border-blue-400 p-5 rounded-lg animate-growOnce mx-5'>
      <h1 className='text-4xl font-Lobster'>Exercise Summary</h1>
      <span className='text-lg font-Lobster font-light'>Way to go 👏</span>
      <br />
      <div className='flex lg:mx-5 my-5 gap-1'>
        <div className='w-[30%] text-center overflow-hidden'>
          <span className='text-5xl bg-purple-400 rounded-full p-2 leading-loose border-4 border-blue-400'>{state.exercise.emoji}</span>
        </div>
        <div className='w-[60%] flex'>
          <span className='text-xl my-auto'>You finished <span className='font-bold font-Lobster'>{state.exercise.title}</span> exercise  for {time}!</span>
        </div>
      </div>
      
      <div className='flex items-center place-content-around'>
      <Button onClickHandler={onDiscardHandler} className='w-[45%] bg-red-400 font-normal'>Discard</Button>
      <Button onClickHandler={onSaveHandler} className='w-[45%]'>Save</Button>
      </div>
    </div>
  </div>)
}

export default SummaryPopup;