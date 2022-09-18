import { timeFormat } from "../../utils/utils";

const ExerciseHistory = ({history,onDelHistory}) =>{
  return (<div className="md:w-3/12">
    <h2 className="text-2xl font-bold my-2">History</h2>
    {history.map((item,acc) => {
    const time = timeFormat(item.time);
    return <div key={acc} className='flex my-2 place-content-between bg-slate-50 rounded-full px-2 items-center shadow-lg border-blue-500 border-4'>
      <span className="bg-slate-300 leading-8 text-center w-8 h-8 rounded-full">{acc+1}</span>
      <div className="mx-3">
      <span className="block font-bold">{item.exercise.title}</span>
      <span className="text-gray-600">{time}</span>
      </div>
      <button className="w-8 h-8 bg-slate-400 rounded-full" onClick={()=>onDelHistory(acc)}>x</button>
      </div>
})}
  </div>)
}

export default ExerciseHistory;