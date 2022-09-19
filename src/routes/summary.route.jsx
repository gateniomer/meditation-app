import { useLocation } from "react-router-dom";
import Button from "../components/button/button.component";
import { timeFormat } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { saveExerciseToLocalStorage } from "../utils/utils";

const Summary = () => {
  const {state} = useLocation();
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
    <h1>Summary Page</h1>
    <h2>{state.exercise.title}</h2>
    <h3>{time}</h3>
    <div>
    <Button onClickHandler={onDiscardHandler}>Discard</Button>
    <Button onClickHandler={onSaveHandler}>Save</Button>
    </div>
  </div>)
}

export default Summary;