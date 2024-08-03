import './App.css';
import Home from './pages/Home';
import HorseRacingBetting from './pages/HorseRacingBetting';
import Intro from './pages/Intro';
import SlotsPage from './pages/Slots';
import Credits from './pages/Credits';
import RocketRacingBets from './pages/RocketRacingBets';
import PlanetMines from "./pages/PlanetMines";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HorseRacing from './pages/HorseRacing';

function App() {
  return (
    <div className='w-100 h-100'>

      <Router>
        <Routes>
          <Route exact path="/" element={<Intro/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/horse-racing-bet" element={<HorseRacingBetting/>}/>
          <Route exact path="/horse-racing/:bettedOn/:stake/:bettingAmount" element={<HorseRacing/>}/>
          <Route exact path="/rocket-racing-bet" element={<RocketRacingBets/>}/>
          <Route exact path="/planet-mines" element={<PlanetMines/>}/>
          <Route exact path="/slots" element={<SlotsPage/>}/>
          <Route exact path="/credits" element={<Credits/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
