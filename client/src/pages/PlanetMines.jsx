import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchOxygenData, updateOxygenData } from "../utils";

export default function PlanetMines() {
  const [bet, setBet] = useState(10);
  const [mines, setMines] = useState(1);

  const [selecting, setSelecting] = useState(true);
  const planetColours = ["Red", "Purple", "Blue"]

  const allFalse = [false, false, false];
  const [minePos, setMinePos] = useState([false, false, false]);

  const [gameState, setGameState] = useState(0);
  const [uncovered, setUncovered] = useState(0);

  const modifyBetAmount = (amount) => {
    const new_bet = bet + amount;
    if (new_bet < 0) {
      alert("Cannot Place Bet Below Zero: " + new_bet.toString())
    } else {
      setBet(new_bet)
    }
  }

  const setMinesAmount = (amount) => {
    setMines(amount)
  }

  const onStartGame = () => {
    setSelecting(false);
    setMinePos(allFalse);
    setGameState(0);

    let posArray = []
    for (let i = 0; i < minePos.length; i++) {
      posArray.push(i);
    }
    posArray = shuffle(posArray);
    console.log(posArray);

    for (let i = 0; i < mines; i++) {
      let new_minePos = minePos;
      new_minePos[posArray[i]] = true;
      setMinePos(new_minePos);
    }
    console.log(minePos);
  }

  const shuffle = (array) => {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  const returnPlanetClick = (rigged) => {
    if (!rigged) {
      setUncovered(uncovered + 1);
      console.log('Unvcovered: ', uncovered);
      if (uncovered == 2 - mines) {
        setGameState(1);
      }
    } else {
      setGameState(2);
    }
  }

  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center justify-center g-cover bg-center w-full h-screen cockpit"
        style={{ flex: 'left' }}>
        <div className={"bg-transparent rounded-md card-container p-36"}
          style={{ width: "70%", height: "50%", transform: "translate(0, -20%)" }}>
          {planetColours.map((item, index) => {
            return <Planet key={index} colour={item} rigged={minePos[index]} returnPlanetClick={returnPlanetClick} />
          })}
        </div>
        <div className="">
          {selecting &&
            <ChooseDifficulty bet={bet} modifyBetAmount={modifyBetAmount} mines={mines} setMinesAmount={setMinesAmount}
              toggleSelecting={onStartGame} />}
          {gameState !== 0 &&
            <Stater gameState={gameState} bet={bet} mines={mines} />
          }
        </div>
      </div>
    </>
  )
}

function ChooseDifficulty({ bet, modifyBetAmount, mine, setMinesAmount, toggleSelecting }) {
  const [selected, setSelected] = useState(1);

  const onSubmitSelection = () => {
    if (bet <= 0) {
      alert("Bet Must be greater than 0")
    } else {
      toggleSelecting()
    }
  }

  const choiceSelected = (x) => {
    setSelected(x);
    setMinesAmount(x);
  }

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 border-4 rounded-md flex flex-col justify-center items-center drop-shadow-[2px_2px_10px_#5bc8af]">
        <h1 className="nunito text-3xl">Choose Bet Amount:</h1>
        <div style={{ flex: 'left' }} className="mb-4">
          <button className={"dec rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => modifyBetAmount(-10)}>-10</button>
          <button className={"dec rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => modifyBetAmount(-1)}>-1</button>
          <span className={"bg-black rounded-md m-2 py-2 px-6 text-white"}>{bet}</span>
          <button className={"inc rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => modifyBetAmount(+1)}>+1</button>
          <button className={"inc rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => modifyBetAmount(+10)}>+10</button>
        </div>
        <h1 className="nunito text-3xl">Choose Number of Mines:</h1>
        <div style={{ flex: 'left' }}>
          <button className={"rounded-md w-10 m-2 p-2" + (selected === 1 ? " bg-amber-700" : " amb")} onClick={() => choiceSelected(1)}>1</button>
          <button className={"rounded-md w-10 m-2 p-2" + (selected === 2 ? " bg-amber-700" : " amb")} onClick={() => choiceSelected(2)}>2</button>
        </div>
        <div style={{ flex: 'left' }}>
          <button className={"plb rounded-md w-100 m-2 p-4 nunito text-white text-2xl"} onClick={onSubmitSelection}>Play Game!</button>
        </div>
      </div>
    </div>
  );
}

function Planet({ colour, rigged, returnPlanetClick }) {
  const [explode, setExplode] = useState(false);
  const [found, setFound] = useState(false);

  const onPlanetClick = () => {
    setFound(true);
    if (rigged) {
      setExplode(true);
    }
    returnPlanetClick(rigged);
  }

  return (
    <div className="max-w-sm rounded w-36" style={{ float: 'left', position: 'relative', margin: 0 }}
      onClick={onPlanetClick}>
      <img className={explode ? "explode" : "planet"}
        src={"./assets/planets/" + (explode ? "Explode" : found ? "tick" : "planet") + colour + ".png"}
        alt={colour + " Planet"} />
    </div>
  );
}


function Stater({ gameState, bet, mines }) {

  const [isRender, setIsRender] = useState(false);
  // 1 = win, 2 = lose
  useEffect(() => {
    if (gameState === 1 && mines === 1) {
      updateOxygenData(bet * 1.5)
    }
    else if (gameState === 1 && mines === 2) {
      updateOxygenData(bet * 2)
    }
    else {
      updateOxygenData(-1 * bet)
    }
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRender(true);
    }, 500)

    return () => clearInterval(interval);
  }, [])

  const reload = () => {
    window.location.reload();
  }
  if (isRender) {
    return (
      <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 border-4 rounded-md flex flex-col justify-center items-center drop-shadow-[2px_2px_10px_#5bc8af]">
          <h1 className="nunito text-3xl">{gameState === 1 ? "YOU WIN" : "YOU LOSE"}</h1>
          <div className="flex justify-between w-100 gap-10">
            <span onClick={reload} className={"rounded-md bg-green-500 p-2 text-4xl nunito hover:cursor-pointer"}>Play Again</span>
            <NavLink to="/home" className={"rounded-md bg-red-500 p-2 text-4xl nunito"}>Go Home</NavLink>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <></>
    )
  }
}


