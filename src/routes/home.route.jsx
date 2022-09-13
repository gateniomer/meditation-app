import SelectExerciseButton from '../components/selectExerciseButton/selectExerciseButton.component';
import ExerciseHistory from '../components/exerciseHistory/exerciseHistory.component';
import { getExerciseListFromLocalStorage } from '../utils/utils';
const Home = () => {
  const history = getExerciseListFromLocalStorage();
  
  return(
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen flex flex-col justify-center items-center">
      <h1 className='text-7xl text-white font-bold mb-10'>Hello, Omer.</h1>
      <SelectExerciseButton/>
      <ExerciseHistory history={history}/>
    </div>
  )
}
export default Home;