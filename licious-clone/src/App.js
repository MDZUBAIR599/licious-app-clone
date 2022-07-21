import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Chicken from './Components/Chicken';
import Fish from './Components/Fish';
import Mutton from './Components/Mutton';
import ReadyToCook from './Components/ReadyToCook';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/chicken" element={<Chicken/>}></Route>
     
      <Route path="/fish" element={<Fish/>}></Route>

      <Route path="/mutton" element={<Mutton/>}></Route>

      <Route path="/readytocook" element={<ReadyToCook/>}></Route>

      
     </Routes>
    </div>
  );
}

export default App;
