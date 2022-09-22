import { useState } from "react";
import { setUserFromLocalStorage } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [input,setInput] = useState('');
  const navigate = useNavigate();
  const onClickHandler = () => {
    const user = input.trim();
    if(user!=='') {
      setUserFromLocalStorage(user);
      navigate('/');
    }
  }
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full min-h-screen flex flex-col justify-center items-center px-3">
      <div className="max-w-[500px]">
        <h1 className="font-Lobster text-white text-5xl">Hi there 👋</h1>
        <h2 className="text-white font-Lobster text-5xl">Welcome to <span className="font-bold text-green-400 text-6xl block">Meditation Tracker</span></h2>
        <span>Please enter your name</span>
        <br />
        <input type="text" className="w-[200px]" onInput={e=>setInput(e.target.value)}/>
        <br />
        <button className="bg-blue-300 my-5" onClick={onClickHandler}>Start</button>
      </div>
      
    </div>
  )
}
export default User;