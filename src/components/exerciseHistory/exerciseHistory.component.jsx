import { timeFormat } from "../../utils/utils";
import { getExerciseListFromLocalStorage,saveExerciseListToLocalStorage } from "../../utils/utils";
import { useState } from "react";
const ExerciseHistory = () =>{
  const [history,setHistory] = useState(getExerciseListFromLocalStorage().reverse());

  const onDelHistory = (acc)=>{
    const historyList = getExerciseListFromLocalStorage();
    historyList.splice(acc,1);
    saveExerciseListToLocalStorage(historyList);
    setHistory(historyList);
    return historyList;
    }

  return (<div className="md:w-3/12">
    <h2 className="text-4xl text-white font-Lobster font-bold my-2">Exercises History</h2>
    <div className="overflow-scroll overflow-x-hidden max-h-[200px] scrollbar">
    {history.map((item,acc) => {
    const time = timeFormat(item.time);
    return <div key={acc} className='flex my-2 place-content-between bg-slate-50 rounded-full px-2 items-center shadow-lg border-blue-500 border-4'>
      <span className="bg-slate-300 leading-8 text-center w-8 h-8 rounded-full">{item.exercise.emoji}</span>
      <div className="mx-3">
      <span className="block text-gray-400 text-sm">{item.date}</span>
      <span className="block font-bold">{item.exercise.title}</span>
      <span className="text-gray-600">{time}</span>
      </div>
      <button className="w-8 h-8 bg-slate-400 rounded-full" onClick={()=>onDelHistory(acc)}>x</button>
      </div>
})}
    </div>
  </div>)
}

export default ExerciseHistory;