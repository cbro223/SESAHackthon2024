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
        <Route exact path="/test" element={<h1>Hello, World</h1>} />
        <Route exact path="/horse-racing-bet" element={<HorseRacingBetting/>} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
