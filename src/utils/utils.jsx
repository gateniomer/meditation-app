export const timeFormat = (time) => {
  const timeToMinutes = Math.floor(time/60);
  const timeToSeconds = time - timeToMinutes*60;
  return `
${time === 0 ? 'Pick Time' : ""}
${timeToMinutes ? (timeToMinutes+'m') : ""}
${timeToSeconds ? (timeToSeconds+'s') : ""}`;
}

export const getExerciseListFromLocalStorage = () => {
  const data = localStorage.getItem('exercises');
  const list = JSON.parse(data);
  return (list ? list : []);
}
export const saveExerciseListToLocalStorage = (list) => {
  const data = JSON.stringify(list);
  localStorage.setItem('exercises',data);
  return list;
}
export const saveExerciseToLocalStorage = (state) => {
  let list = getExerciseListFromLocalStorage();
  list ? list.push(state) : list = [state];
  const data = JSON.stringify(list);
  localStorage.setItem('exercises',data);
  return list;
}

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