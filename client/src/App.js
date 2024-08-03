import './App.css';
import Header from './components/header';
import Home from './pages/Home';
import HorseRacingBetting from './pages/HorseRacingBetting';
import Intro from './pages/Intro';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className='w-100 h-100'>

    <Router>
      <Routes>
        <Route exact path="/" element={<Intro/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/horse-racing-bet" element={<HorseRacingBetting/>} />
        <Route exact path="/credits" element={<h1>Hello, World</h1>} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
