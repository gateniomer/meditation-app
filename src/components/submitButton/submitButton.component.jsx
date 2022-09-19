import { Link } from "react-router-dom";
import { saveLastSelectedToLocalStorage } from "../../utils/utils";
const SubmitButton = ({state}) => {
  return (
    <Link to="exercise" state={state}>
      <button className='bg-blue-100 px-5 py-1 rounded-lg text-3xl mt-3 font-Lobster text-gray-700 font-bold tracking-widest border-4 border-blue-600 shadow-xl' onClick={()=>saveLastSelectedToLocalStorage({time:state.time,exercise:state.exercise})}>Begin {state.exercise.title}</button>
      </Link>
  )
}

export default SubmitButton;