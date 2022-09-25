import Home from "./routes/home.route";
import User from "./routes/user.route";
import Exercise from "./routes/exercise.route";
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<User/>}/>
        <Route path="exercise" element={<Exercise/>}/>
        <Route
        path="*"
        element={<Home/>}
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
