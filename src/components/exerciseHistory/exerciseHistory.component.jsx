import { getSelectedUserFromLocalStorage, setUserToLocalStorage, timeFormat } from "../../utils/utils";
import { useState } from "react";
const ExerciseHistory = ({list}) =>{
  const [history,setHistory] = useState(list.reverse());
  const onDelHistory = (acc)=>{
    const user = getSelectedUserFromLocalStorage();
    user.exercises.splice(acc,1);
    setUserToLocalStorage(user);
    setHistory(user.exercises);
    return user.exercises;
  }

  return (history.length ? <div className="max-w-[400px] w-full">
    <h2 className="text-4xl text-white font-Lobster font-bold my-2">Exercises History</h2>
    <div className="overflow-scroll overflow-x-hidden max-h-[200px] scrollbar px-2">
    {history.map((item,acc) => {
    const time = timeFormat(item.time);
    return <div key={acc} className='flex my-2 place-content-between bg-mainColor rounded-xl p-2 items-center shadow-lg text-text-light'>
      <span className="bg-blue-300 leading-[48px] text-center w-[48px] h-[48px] rounded-xl text-[24px]">{item.exercise.emoji}</span>
      <div>
      <span className="block font-bold">{item.exercise.title} for {time}</span>
      <span className="block text-gray-300 text-sm">{item.date}</span>
      </div>
      <button className="w-8 h-8 bg-blue-300 rounded-full text-xl" onClick={()=>onDelHistory(acc)}>x</button>
      </div>
})}
    </div>
  </div> : "")
}

export default ExerciseHistory;