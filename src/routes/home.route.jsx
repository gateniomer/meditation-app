import { Link } from 'react-router-dom';
import ExerciseHistory from '../components/exerciseHistory/exerciseHistory.component';
import { getExerciseListFromLocalStorage,saveExerciseListToLocalStorage, timeFormat } from '../utils/utils';
import { useState } from 'react';
import EXERCISES from '../exercises';
const Home = () => {
  const [time,setTime] = useState(60);
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
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen lg:flex justify-center items-center space-x-5 px-3">
      <div>
      <h1 className='text-8xl text-white font-bold font-Lobster'>Hello, @user</h1>
      {quote && 
      <span className='block text-3xl text-gray-700 max-w-xl font-Lobster mb-3 italic'>
      {quote.content + ' '}
      <br />
      <span className='text-2xl text-gray-500 font-bold bg-slate-300 px-4 rounded-md not-italic'>{quote.author}</span>
      </span>
      }
      

      <div className='flex items-center my-2'>
      {Object.keys(EXERCISES).map(key => 
        <span 
        key={key} 
        className={`bg-slate-200 rounded-full px-3 py-0.5 shadow-sm cursor-pointer ml-3 ${exerciseSelected.title === EXERCISES[key].title ? 'border-red-400 border-4 animate-grow' : ''}`}
        onClick={()=>{
          setExericeSelected(EXERCISES[key]);
          // setSelectMode(false);
          }}>
        {EXERCISES[key].title + ' '}
        {EXERCISES[key].emoji}

        </span>
        )}
      </div>
      <div className='bg-blue-700 p-5 inline-block rounded-xl rounded-bl-none mt-3 border-4 border-blue-500'>
      <span className='text-3xl font-bold text-cyan-300'>{exerciseSelected.title}</span>
      <br/>
      <span className='block text-1xl max-w-md text-gray-300'>{exerciseSelected.shortDescription}</span>
      </div>
      <br />

      <div className="relative pt-1 max-w-md">
        <span className='text-xl'>Exercise for {timeFormat(time)}</span>
        <input
          type="range"
          min={10}
          max={3600}
          className="
            form-range
            appearance-none
            w-full
            h-1
            rounded-full
            p-0
            bg-slate-300
            focus:outline-none focus:ring-0 focus:shadow-none
          "
          id="customRange1"
          onChange={e=>setTime(e.target.value)}
        />
      </div>

      <Link to="exercise" state={({time,exercise:exerciseSelected})}>
      <button className='bg-blue-100 px-5 py-1 rounded-lg text-3xl mt-3 font-Lobster text-gray-700 font-bold tracking-widest border-4 border-blue-600 shadow-xl' onClick={()=>{}}>Begin {exerciseSelected.title}</button>
      </Link>
      </div>
      {/* <SelectExerciseButton/> */}
      <ExerciseHistory history={history} onDelHistory={onDelHistoryHandler}/>
    </div>
  )
}
export default Home;