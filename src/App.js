/* import "./App.css"; */
// import "./Components/Register.css";
// import "./Components/Landing.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/Register' element={<Register/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Home' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
