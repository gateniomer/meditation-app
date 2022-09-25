import { setSelectedUserFromLocalStorage } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
const AvatarDisplay = ({users}) => {
  const navigate = useNavigate();
  const onClickHandler = (user) => {
    setSelectedUserFromLocalStorage(user.id);
    navigate('/');
  }
  return(
    users.length ? <div className="bg-[rgba(0,0,0,0.2)] rounded-xl p-3">
      <span className="text-xl block text-center mb-3">Existing Users</span>
      <div className="flex gap-3 justify-center">
      {users.map(user=>
        <div key={user.id} className='text-center cursor-pointer flex flex-col justify-center items-center' onClick={()=>onClickHandler(user)}>
          <div className="bg-mainColor w-[50px] h-[50px] rounded-full leading-[50px] text-[30px]">{user.name[0].toUpperCase()}</div>
          <span className="">{user.name}</span>
        </div>
      )}
      </div>
    </div> : ""
  )
}

export default AvatarDisplay;