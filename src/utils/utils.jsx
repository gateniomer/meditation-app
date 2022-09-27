//return time in the right format
export const timeFormat = (time) => {
  const timeToMinutes = Math.floor(time/60);
  const timeToSeconds = time - timeToMinutes*60;
  return `
${time === 0 ? 'Pick Time' : ""}
${timeToMinutes ? (timeToMinutes+'m') : ""}
${timeToSeconds ? (timeToSeconds+'s') : ""}`;
}// timeFormat()

//save last selected exercise to local storage
export const saveLastSelectedToLocalStorage = (state) => {
  const data = JSON.stringify(state);
  localStorage.setItem('lastSelected',data);
  return state;
}//saveLastSelectedToLocalStorage()

//get last selected exercise from local storage
export const getLastSelectedFromLocalStorage = () => {
  const data = localStorage.getItem('lastSelected');
  const state = JSON.parse(data);
  return state;
}//getLastSelectedFromLocalStorage()

//get list of users from local storage
export const getUsersFromLocalStorage = () => {
  const data = localStorage.getItem('users');
  const user = JSON.parse(data);
  return user ? user : [];
}//getUsersFromLocalStorage()

//set list of users in local storage
export const setUsersFromLocalStorage = (users) => {
  const data = JSON.stringify(users);
  localStorage.setItem('users',data);
}//setUsersFromLocalStorage()

//get current logged in user from local storage
export const getUserFromLocalStorage = () => {
  const users = getUsersFromLocalStorage();
  const selectedUser = getSelectedUserFromLocalStorage();
  return users[selectedUser];
}//getUserFromLocalStorage()

//update user props in local storage
export const setUserToLocalStorage = (userToUpdate) => {
  let users = getUsersFromLocalStorage();
  let newUsers = users
  .map(user => {
    if(user.id === userToUpdate.id) return userToUpdate;
    return user;
  })
  setUsersFromLocalStorage(newUsers);
}//setUserToLocalStorage()

//create new user to local storage,if name exist then log in.
export const createUserInLocalStorage = (username) => {
  let users = getUsersFromLocalStorage();
  let userObj;
  users.forEach(user => {
    if(user.name.toLowerCase() === username.toLowerCase()) {
      userObj = {...user};
    }
  })
  if(userObj){
    setSelectedUserFromLocalStorage(userObj.id);
  }else{
    userObj = {
      id:new Date(),
      name:username,
      exercises:[]
    }
    users.push(userObj);
    const data = JSON.stringify(users);
    localStorage.setItem('users',data);
    setSelectedUserFromLocalStorage(userObj.id);
  }
}//createUserInLocalStorage()

//delete user from local storage
export const deleteUserFromLocalStorage = () => {
  const userToDelete = getSelectedUserFromLocalStorage();
  const users = getUsersFromLocalStorage();
  let newUsers = users
  .map(user => {
    if(user.id!==userToDelete.id) return user;
  })
  .filter(user=>user);
  setUsersFromLocalStorage(newUsers);
}//deleteUserFromLocalStorage()

//set selected user id to local storage
export const setSelectedUserFromLocalStorage = (userID) => {
  const data = JSON.stringify(userID);
  localStorage.setItem('selectedUserID',data);
}//setSelectedUserFromLocalStorage()

//get selected user props from local storage
export const getSelectedUserFromLocalStorage = () => {
  const data = localStorage.getItem('selectedUserID');
  const selectedUserID = JSON.parse(data);
  const users = getUsersFromLocalStorage();
  const user = users.find(user => user.id === selectedUserID);
  return user;
}//getSelectedUserFromLocalStorage()