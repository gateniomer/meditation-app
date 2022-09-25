export const timeFormat = (time) => {
  const timeToMinutes = Math.floor(time/60);
  const timeToSeconds = time - timeToMinutes*60;
  return `
${time === 0 ? 'Pick Time' : ""}
${timeToMinutes ? (timeToMinutes+'m') : ""}
${timeToSeconds ? (timeToSeconds+'s') : ""}`;
}

// export const getExerciseListFromLocalStorage = () => {
//   const data = localStorage.getItem('exercises');
//   const list = JSON.parse(data);
//   return (list ? list : []);
// }
// export const saveExerciseListToLocalStorage = (list) => {
//   const data = JSON.stringify(list);
//   localStorage.setItem('exercises',data);
//   return list;
// }
// export const saveExerciseToLocalStorage = (state) => {
//   let list = getExerciseListFromLocalStorage();
//   list ? list.push(state) : list = [state];
//   const data = JSON.stringify(list);
//   localStorage.setItem('exercises',data);
//   return list;
// }


export const saveLastSelectedToLocalStorage = (state) => {
  const data = JSON.stringify(state);
  localStorage.setItem('lastSelected',data);
  return state;
}

export const getLastSelectedFromLocalStorage = () => {
  const data = localStorage.getItem('lastSelected');
  const state = JSON.parse(data);
  return state;
}

export const getUsersFromLocalStorage = () => {
  const data = localStorage.getItem('users');
  const user = JSON.parse(data);
  return user ? user : [];
}

export const setUsersFromLocalStorage = (users) => {
  const data = JSON.stringify(users);
  localStorage.setItem('users',data);
}

export const getUserFromLocalStorage = () => {
  const users = getUsersFromLocalStorage();
  const selectedUser = getSelectedUserFromLocalStorage();
  return users[selectedUser];
}

export const setUserToLocalStorage = (userToUpdate) => {
  let users = getUsersFromLocalStorage();
  let newUsers = users
  .map(user => {
    if(user.id === userToUpdate.id) return userToUpdate;
    return user;
  })
  setUsersFromLocalStorage(newUsers);
}

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
}

export const deleteUserFromLocalStorage = () => {
  const userToDelete = getSelectedUserFromLocalStorage();
  const users = getUsersFromLocalStorage();
  let newUsers = users
  .map(user => {
    if(user.id!==userToDelete.id) return user;
  })
  .filter(user=>user);
  setUsersFromLocalStorage(newUsers);
}

export const setSelectedUserFromLocalStorage = (userID) => {
  const data = JSON.stringify(userID);
  localStorage.setItem('selectedUserID',data);
}

export const getSelectedUserFromLocalStorage = () => {
  const data = localStorage.getItem('selectedUserID');
  const selectedUserID = JSON.parse(data);
  const users = getUsersFromLocalStorage();
  const user = users.find(user => user.id === selectedUserID);
  return user;
}