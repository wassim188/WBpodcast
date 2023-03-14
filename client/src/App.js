import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/Sign Up/SignUp";
import Register from "./components/Sign Up/Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Register/>}/>
      </Route>
    </Routes>
  );
}

export default App;
