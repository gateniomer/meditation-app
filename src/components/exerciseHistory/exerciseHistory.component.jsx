import { timeFormat } from "../../utils/utils";

const ExerciseHistory = ({history,onDelHistory}) =>{
  return (<div>
    <h2 className="text-2xl font-bold my-2">History</h2>
    {history.map((item,acc) => {
    const time = timeFormat(item.time);
    return <div key={acc} className='flex my-2 place-content-between'>
      <span className="bg-slate-300 p-3 rounded-full mr-2">{acc+1}</span>
      <div>
      <h2>{item.exercise.title}</h2>
      <h2>{time}</h2>
      </div>
      <button className="bg-slate-400 p-3 rounded-full" onClick={()=>onDelHistory(acc)}>x</button>
      </div>
})}
  </div>)
}

export default ExerciseHistory;