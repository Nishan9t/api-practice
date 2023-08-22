import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";



function App() {
  return (
    <Routes>
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/login" element={<Login/>} />
    
  </Routes>
  );
}

export default App;
