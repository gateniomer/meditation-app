import Button from "../button/button.component";
import { Link } from "react-router-dom";
import EXERCISES from "../../exercises";
import { useState } from "react";

const SelectExerciseButton = ({onClickHandler}) => {
  const [exerciseSelected,setExericeSelected] = useState(EXERCISES.MEDITATE);
  const [time,setTime] = useState(150);
  const [selectMode,setSelectMode] = useState(false);
  
  //Handling display time in the right format
  const timeToMinutes = Math.floor(time/60);
  const timeToSeconds = time - timeToMinutes*60;
  const timeToDisplay = `
  ${time === 0 ? 'Pick Time' : ""}
  ${timeToMinutes ? (timeToMinutes+'m') : ""}
  ${timeToSeconds ? (timeToSeconds+'s') : ""}`;

  const exerciseDetails = {
    time:time,
    exercise:exerciseSelected
  }

  const onPlusClickHanlder = () => {
    setTime(prevTime => prevTime +10);
  }
  const onMinusClickHanlder = () => {
    if(time>0) setTime(prevTime => prevTime - 10);
  }
  const onAddTimeHandler = (time=0) => {
    setTime(prevTime => prevTime + time);
  }
  
  return (
    <div className="transition-all">
      {selectMode ? 
      <div className="flex animate-[wiggle_1s_ease-in-out_forwards]">
        {Object.keys(EXERCISES).map(key => 
        <span 
        key={key} 
        className="flex flex-col items-center mr-2 text-sm"
        onClick={()=>{
          setExericeSelected(EXERCISES[key]);
          setSelectMode(false);
          }}>
        <img 
        src='../assets/placeholder.svg' className="w-10 h-10 rounded"/>
        {EXERCISES[key].title}
        </span>
        
        )}
      </div>
      :""}
      <div className="flex">
        {selectMode && 
        <Button onClickHandler = {onMinusClickHanlder}>-</Button>}

        <Button 
        className='flex justify-center items-center'
        >
          <img className="w-10 h-10" onClick={()=>setSelectMode(!selectMode)}/>
          <Link to="exercise" state={({time,exercise:exerciseSelected})}>
            <div className="flex flex-col ml-3">
            {exerciseSelected.title}
            <span>{timeToDisplay}</span>
            </div>
          </Link>
        </Button>
        
        {selectMode && 
        <Button onClickHandler = {onPlusClickHanlder}>+</Button>}
      </div>
      {selectMode && 
      <div>
        <Button onClickHandler={()=>setTime(0)}>Reset</Button>
      <Button onClickHandler={()=>onAddTimeHandler(60)}>+1m</Button>
      <Button onClickHandler={()=>onAddTimeHandler(300)}>+5m</Button>
      <Button onClickHandler={()=>onAddTimeHandler(600)}>+10m</Button>
      <Button onClickHandler={()=>onAddTimeHandler(1800)}>+30m</Button>
      </div>}
    </div>
  )
}

export default SelectExerciseButton;