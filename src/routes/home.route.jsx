import SelectExerciseButton from '../components/selectExerciseButton/selectExerciseButton.component';
import ExerciseHistory from '../components/exerciseHistory/exerciseHistory.component';
import { getExerciseListFromLocalStorage,saveExerciseListToLocalStorage } from '../utils/utils';
import { useState } from 'react';
const Home = () => {
  const [history,setHistory] = useState(getExerciseListFromLocalStorage());
  const onDelHistory = (acc)=>{
  const historyList = getExerciseListFromLocalStorage();
  historyList.splice(acc,1);
  saveExerciseListToLocalStorage(historyList);
  return historyList;
  }
  const onDelHistoryHandler = (acc)=>{
    const newList = onDelHistory(acc);
    setHistory(newList);
  }
  return(
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen flex flex-col justify-center items-center">
      <h1 className='text-7xl text-white font-bold mb-10'>Hello, Omer.</h1>
      <SelectExerciseButton/>
      <ExerciseHistory history={history} onDelHistory={onDelHistoryHandler}/>
    </div>
  )
}
export default Home;