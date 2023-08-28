import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import DataProvider from "./Context/DataProvider";



function App() {
  const user=localStorage.getItem("token")
  return (
 <DataProvider>
    <Routes>
      {user && <Route path='/' exact element={<HomePage/>} />}
      <Route path='/signup' exact element={<Signup/>} />
      <Route path='/login' exact element={<Login/>} />
      <Route path='/' exact element={<Navigate replace to="/login" />} /> 

    
    </Routes>
  </DataProvider>
  );
}

export default App;
