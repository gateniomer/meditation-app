import { timeFormat } from "../../utils/utils";

const ExerciseHistory = ({history}) =>{
  console.log(history)
  return (<div>
    <h2 className="text-2xl font-bold my-2">History</h2>
    {history.map((item,acc) => {
    const time = timeFormat(item.time);
    return <div key={acc} className='flex my-2'>
      <h3 className="bg-slate-300 p-3 rounded-full mr-2">{acc+1}</h3>
      <div>
      <h2>{item.exercise.title}</h2>
      <h2>{time}</h2>
      </div>
      </div>
})}
  </div>)
}

export default ExerciseHistory;