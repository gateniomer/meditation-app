import { getSelectedUserFromLocalStorage, timeFormat } from '../../utils/utils';
import { useNavigate } from "react-router-dom";
import {getUserFromLocalStorage,setUserToLocalStorage} from "../../utils/utils";
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
    const user = getSelectedUserFromLocalStorage();
    user.exercises.push({date:dateFormat,...state})
    setUserToLocalStorage(user);
    navigate('/',{state});
  }

  return (
  <div className="bg-black bg-opacity-60 text-text-light absolute w-full h-screen flex flex-col items-center justify-center">
    <div className='bg-bg-main-light shadow-xl p-5 rounded-lg animate-growOnce mx-5 max-w-[450px]'>
      <h1 className='text-4xl font-Lobster'>Exercise Summary 🎉</h1>
      <hr className='block mb-5 mt-2'/>
      <p className='text-lg'>You successfully completed</p>
      <span className='text-7xl font-bold font-Lobster inline-block mx-2'>{state.exercise.title}</span>
      <span className='inline-block ml-2 text-xl'>for {time}</span>
      <span className='block my-5 text-lg'>Way to go! {state.exercise.emoji}</span>
      
      
      <div className='flex items-center place-content-around'>
      <Button onClickHandler={onDiscardHandler} className='w-[45%] bg-red-400 font-normal'>Discard</Button>
      <Button onClickHandler={onSaveHandler} className='w-[45%]'>Save</Button>
      </div>
    </div>
  </div>)
}

export default SummaryPopup;