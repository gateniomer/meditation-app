import ExerciseHistory from '../components/exerciseHistory/exerciseHistory.component';
import { getLastSelectedFromLocalStorage, timeFormat } from '../utils/utils';
import { useState } from 'react';
import EXERCISES from '../exercises';
import SubmitButton from '../components/submitButton/submitButton.component';
import { getUserFromLocalStorage } from '../utils/utils';
import {Navigate } from 'react-router-dom';
const Home = () => {
  //get lastest data selected
  const lastSelected = getLastSelectedFromLocalStorage();
  //time of exercise
  const [time,setTime] = useState(lastSelected ? lastSelected.time : 60);
  //type of exercise
  const [exerciseSelected,setExericeSelected] = useState(lastSelected ? lastSelected.exercise : EXERCISES.MEDITATE);
  //get user name from local storage
  const user = getUserFromLocalStorage();
  
  //random quote (from api)
  const [quote,setQuote] = useState('');
  //fetch new quote
  if(quote==='')
  fetch('https://api.quotable.io/random?maxLength=70').then(response => response.json())
  .then(data=>setQuote(data))
  .catch(err => console.log(err))

  return(user ? 
    <div className="page bg-main">
      <div className='text-text-light'>
      <h1 className='text-8xl text-mainColor font-bold font-Lobster pt-5'>Hi {user ? user.charAt(0).toUpperCase() + user.slice(1) : 'Guest'},</h1>
      {quote && 
      <span className='block text-3xl max-w-xl font-Lobster mb-3 italic'>
      {quote.content + ' '}
      <br />
      <span className='text-2xl  font-bold bg-mainColor px-4 rounded-md not-italic'>{quote.author}</span>
      </span>
      }

      <span className='text-lg italic'>1. Type of exercise</span>
      <div className='flex items-center my-2 gap-2 flex-wrap max-w-lg'>
      {Object.keys(EXERCISES).map(key => 
        <span 
        key={key} 
        className={`bg-mainColor rounded-full px-3 py-0.5 shadow-sm cursor-pointer ${exerciseSelected.title === EXERCISES[key].title ? 'border-red-400 border-4 animate-grow' : ''}`}
        onClick={()=>{
          setExericeSelected(EXERCISES[key]);
          // setSelectMode(false);
          }}>
        {EXERCISES[key].title + ' '}
        {EXERCISES[key].emoji}

        </span>
        )}
      </div>

      <span className='text-lg italic'>2. Exercise for {timeFormat(time)}</span>
      <div className='max-w-md'>
        <input
          type="range"
          value={time/60}
          min={1}
          max={60}
          className='w-full'
          onChange={e=>setTime(e.target.value * 60)}
        />
      </div>

      <div className='bg-blue-700 p-5 inline-block rounded-2xl rounded-bl-none mt-3 border-4 border-blue-500'>
      <span className='text-3xl font-bold text-cyan-300'>{exerciseSelected.title}</span>
      <br/>
      <span className='block text-1xl max-w-md text-gray-300'>{exerciseSelected.shortDescription}</span>
      </div>
      <br />
      <SubmitButton state={{time,exercise:exerciseSelected}}/>
      </div>
      <ExerciseHistory/>
    </div>:<Navigate to={('/start')}/>
  )
}
export default Home;