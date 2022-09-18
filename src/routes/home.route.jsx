import SelectExerciseButton from '../components/selectExerciseButton/selectExerciseButton.component';
import ExerciseHistory from '../components/exerciseHistory/exerciseHistory.component';
import { getExerciseListFromLocalStorage,saveExerciseListToLocalStorage } from '../utils/utils';
import { useState } from 'react';
import EXERCISES from '../exercises';
const Home = () => {
  const [history,setHistory] = useState(getExerciseListFromLocalStorage());
  const [quote,setQuote] = useState('');
  const [exerciseSelected,setExericeSelected] = useState(EXERCISES.MEDITATE);
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

  //fetch new quote
  if(quote==='')
  fetch('https://api.quotable.io/random?maxLength=70').then(response => response.json())
  .then(data=>setQuote(data))
  .catch(err => console.log(err))

  return(
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen flex justify-center items-center px-10">
      <div>
      <h1 className='text-8xl text-white font-bold font-Lobster'>Hello, @user <span className='text-9xl'>🧘</span></h1>
      <span className='text-3xl text-gray-700 max-w-xl font-Lobster mb-3 italic'>
      {quote && quote.content}
      <br/>
      <span className='text-2xl text-gray-500 font-bold bg-slate-300 px-4 rounded-full not-italic'>{quote.author}</span>
      </span>

      <div className='flex items-center w-4/12 my-2'>
      {Object.keys(EXERCISES).map(key => 
        <span 
        key={key} 
        className={`bg-slate-200 rounded-full px-3 py-0.5 shadow-sm cursor-pointer ml-3 ${exerciseSelected.title === EXERCISES[key].title ? 'border-red-400 border-4 animate-wiggle' : ''}`}
        onClick={()=>{
          setExericeSelected(EXERCISES[key]);
          // setSelectMode(false);
          }}>
        {EXERCISES[key].title}
        </span>
        )}
      </div>
      <span className='text-3xl font-bold text-cyan-300'>{exerciseSelected.title}</span>
      <br/>
      <span className='text-1xl max-w-xs'>{exerciseSelected.shortDescription}</span>
      </div>
      {/* <SelectExerciseButton/> */}
      <ExerciseHistory history={history} onDelHistory={onDelHistoryHandler}/>
    </div>
  )
}
export default Home;