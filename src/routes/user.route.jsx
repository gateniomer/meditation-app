import { useState } from "react";
import { getUsersFromLocalStorage, createUserInLocalStorage } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import EXERCISES from "../exercises";
import AvatarDisplay from "../components/avatarDisplay/avatarDisplay.component";
const User = () => {
  const [input,setInput] = useState('');
  const navigate = useNavigate();
  const users = getUsersFromLocalStorage();

  //on login button clicked
  const onClickHandler = () => {
    const username = input.trim();
    if(username!=='') {
      createUserInLocalStorage(username);
      navigate('/');
    }
  }//onClickHandler()
  
  return (
    <div className="page bg-main">
      <div className="container animate-growOnce text-text-light">

        <h1 className="font-Lobster text-text-light text-7xl mb-5">Hi there,</h1>
        <h2 className=" font-Lobster text-5xl">Welcome to <span className="font-bold text-mainColor text-6xl block mb-5">Meditation Tracker ⏱️</span></h2>
        <span className="block text-xl">Meditation Tracker lets you <strong>choose from {Object.keys(EXERCISES).length} different exercies to track & practice daily!</strong> This app was created as part of my learning journey to become a Full-Stack developer, thank you for trying it out!</span>
        <span className=" italic block">Created by Omer Gatenio</span>
        <span className="text-md italic block mt-3">Your Name</span>
        <input type="text" className="w-[200px] rounded-lg h-[30px] outline-none px-1 focus text-mainColor" onInput={e=>setInput(e.target.value)}/>
        <br />
        <button className="bg-mainColor my-5 rounded-lg px-5 py-1  font-bold text-2xl shadow-lg" onClick={onClickHandler}>Login</button>
        <AvatarDisplay users={users}/>
      </div>
      
    </div>
  )
}
export default User;