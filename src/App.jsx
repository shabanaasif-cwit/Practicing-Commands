import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Added imports
import Login from "./Components/login";
import Logout from "./Components/logout";
import './App.css';
import Signup from './Components/signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Default to Login if the path is just "/" */}
         <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;