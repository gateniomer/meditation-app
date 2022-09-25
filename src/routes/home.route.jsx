import ExerciseHistory from '../components/exerciseHistory/exerciseHistory.component';
import { deleteUserFromLocalStorage, getLastSelectedFromLocalStorage, getSelectedUserFromLocalStorage, timeFormat } from '../utils/utils';
import { useState } from 'react';
import EXERCISES from '../exercises';
import SubmitButton from '../components/submitButton/submitButton.component';
import { getUsersFromLocalStorage } from '../utils/utils';
import {Navigate,useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  //get lastest data selected
  const lastSelected = getLastSelectedFromLocalStorage();
  //time of exercise
  const [time,setTime] = useState(lastSelected ? lastSelected.time : 60);
  //type of exercise
  const [exerciseSelected,setExericeSelected] = useState(lastSelected ? lastSelected.exercise : EXERCISES.MEDITATE);
  //get user from local storage
  const user = getSelectedUserFromLocalStorage();
  
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
      <div className='bg-[rgba(0,0,0,0.2)] p-2 rounded-lg max-w-sm my-2'>
        <span className="bg-mainColor w-[30px] h-[30px] rounded-full leading-[30px] text-[20px] inline-block text-center mr-2">{user.name[0].toUpperCase()}</span>
        <span onClick={()=>navigate('login')} className='cursor-pointer'>👤Change User</span>
        <span onClick={()=>{
          deleteUserFromLocalStorage();
          navigate('login');
          }} className='cursor-pointer inline-block ml-2'>❌Delete User</span>
      </div>
      <h1 className='text-8xl text-mainColor font-bold font-Lobster'>Hi {user ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : 'Guest'},</h1>
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
      <SubmitButton state={{time:10,exercise:exerciseSelected}}/>
      </div>
      <ExerciseHistory list={user.exercises}/>
    </div>:<Navigate to={('login')}/>
  )
}
export default Home;