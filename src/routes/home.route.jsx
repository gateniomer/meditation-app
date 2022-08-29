import SelectExerciseButton from '../components/selectExerciseButton/selectExerciseButton.component';

const Home = () => {

  return(
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen flex flex-col justify-center items-center">
      <h1 className='text-7xl text-white font-bold mb-10'>Hello, Omer.</h1>
      <SelectExerciseButton/>
    </div>
  )
}
export default Home;