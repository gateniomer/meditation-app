import { Link } from "react-router-dom";
import { saveLastSelectedToLocalStorage } from "../../utils/utils";
const SubmitButton = ({state}) => {
  return (
    <Link to="exercise" state={state}>
      <button className='bg-button-main px-5 py-1 rounded-xl text-2xl mt-3 font-Lobster text-text-light tracking-widest shadow-xl' onClick={()=>saveLastSelectedToLocalStorage({time:state.time,exercise:state.exercise})}>Begin {state.exercise.title}</button>
      </Link>
  )
}

export default SubmitButton;