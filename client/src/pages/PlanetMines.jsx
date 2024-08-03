import React, {useState} from "react";
import Header from "../components/Header";

export default function PlanetMines() {
  const [bet, setBet] = useState(10);
  const [mines, setMines] = useState(1);

  const [selecting, setSelecting] = useState(true);

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

  const toggleSelecting = () => {
    setSelecting(!selecting)
  }

  return (
    <>
      <Header/>
      <div
        className="flex flex-col items-center justify-center g-cover bg-center w-full h-screen cockpit"
        style={{flex: 'left'}}>
        <div className={"bg-transparent rounded-md card-container p-36"}
             style={{width: "70%", height: "50%", transform: "translate(0, -20%)"}}>
          <Planet colour={'Red'}/>
          <Planet colour={'Purple'}/>
          <Planet colour={'Blue'}/>
        </div>
        {selecting &&
          <ChooseDifficulty bet={bet} modifyBetAmount={modifyBetAmount} mines={mines} setMinesAmount={setMinesAmount}
                            toggleSelecting={toggleSelecting}/>}
      </div>
    </>
  )
}

function ChooseDifficulty({bet, modifyBetAmount, mine, setMinesAmount, toggleSelecting}) {
  const onSubmitSelection = () => {
    if (bet <= 0) {
      alert("Bet Must be greater than 0")
    } else {
      toggleSelecting()
    }
  }

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md flex flex-col justify-center items-center">
        <h1>Choose Bet Amount:</h1>
        <div style={{flex: 'left'}}>
          <button className={"bg-amber-400 rounded-md w-10 m-2"} onClick={() => modifyBetAmount(-10)}>-10</button>
          <button className={"bg-amber-500 rounded-md w-10 m-2"} onClick={() => modifyBetAmount(-1)}>-1</button>
          <span className={"bg-lime-500 rounded-md w-10 m-2"}>{bet}</span>
          <button className={"bg-amber-600 rounded-md w-10 m-2"} onClick={() => modifyBetAmount(+1)}>+1</button>
          <button className={"bg-amber-700 rounded-md w-10 m-2"} onClick={() => modifyBetAmount(+10)}>+10</button>
        </div>
        <h1>Choose Bet Amount:</h1>
        <div style={{flex: 'left'}}>
          <button className={"bg-amber-400 rounded-md w-10 m-2"} onClick={() => setMinesAmount(1)}>1</button>
          <button className={"bg-amber-400 rounded-md w-10 m-2"} onClick={() => setMinesAmount(2)}>2</button>
        </div>
        <div style={{flex: 'left'}}>
          <button className={"bg-blue-400 rounded-md w-100 m-2"} onClick={onSubmitSelection}>Play Game</button>
        </div>
      </div>
    </div>
  );
}

function Planet({colour}) {
  const [explode, setExplode] = useState(false);

  const onPlanetClick = () => {
    setExplode(!explode);
  }

  return (
    <div className="max-w-sm rounded w-36" style={{float: 'left', position: 'relative', margin: 0}}
         onClick={onPlanetClick}>
      <img className={explode ? "explode" : "planet"}
           src={"./assets/planets/" + (explode ? "Explode" : "Planet") + colour + ".png"}
           alt={colour + " Planet"}/>
    </div>
  );
}