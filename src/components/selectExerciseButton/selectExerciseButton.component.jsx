import Button from "../button/button.component";
import { Link } from "react-router-dom";
import EXERCISES from "../../exercises";
import { useState } from "react";

const SelectExerciseButton = () => {
  const [exerciseSelected,setExericeSelected] = useState(EXERCISES.MEDITATE);
  const [selectMode,setSelectMode] = useState(false);
  console.log(selectMode);
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
      <Button 
      className='flex justify-center items-center'
      onClickHandler={()=>setSelectMode(!selectMode)}>
        <exerciseSelected.icon className="w-10 h-10"/>
        <Link to="exercise">
          <div className="flex flex-col ml-3">
          {exerciseSelected.title}
          <span>00:00</span>
          </div>
        </Link>
      </Button>
    </div>
  )
}

export default SelectExerciseButton;