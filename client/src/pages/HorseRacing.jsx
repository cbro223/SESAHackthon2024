import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {NavLink, useParams} from "react-router-dom";

export default function HorseRacing() {
  const chosen = "Blue";
  const [bluePosition, setBluePosition] = useState(0); // Initial positions for 4 horses
  const [greenPosition, setGreenPosition] = useState(0);
  const [pinkPosition, setPinkPosition] = useState(0);
  const [yellowPosition, setYellowPosition] = useState(0);

  //bettedOn is the colour of the horse the user betted on
  //stake is the stake of the user's bet 
  //bettingAmount is the amount of oxygen

  let {bettedOn, stake, bettingAmount} = useParams();


  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  // const [bettedOn , setBettedOn] = useState(bettedOnParam);
  // const [stake, setStake] = useState(stakeParam);
  // const [bettingAmount, setBettingAmount] = useState(bettingAmountParam);

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        const moveBlueBy = Math.random() * 0.06;
        const moveGreenBy = Math.random() * 1;
        const movePinkBy = Math.random() * 0.04;
        const moveYellowBy = Math.random() * 0.05;

        setBluePosition((prevPosition) =>
          prevPosition += moveBlueBy
        );
        setGreenPosition((prevPosition) =>
          prevPosition += moveGreenBy
        );
        setPinkPosition((prevPosition) =>
          prevPosition += movePinkBy
        );
        setYellowPosition((prevPosition) =>
          prevPosition += moveYellowBy
        );
        const endLocation = 91.5;
        if (bluePosition >= endLocation || greenPosition >= endLocation || pinkPosition >= endLocation || yellowPosition >= endLocation) {
          console.log("Warning warning jdaskl")
          clearInterval(interval);
          setGameOver(true);
        }


        if (bluePosition >= endLocation) {
          setWinner("blue");
        } else if (greenPosition >= endLocation) {
          setWinner("green");
        } else if (pinkPosition >= endLocation) {
          setWinner("pink");
        } else if (yellowPosition >= endLocation) {
          setWinner("yellow");
        }


      }, 1); // Update positions every 1ms
      return () => clearInterval(interval);

    }

  }, [bluePosition, greenPosition, pinkPosition, yellowPosition, gameOver]);
  return (


    <div>
      <Header/>
      {/* Render the winning model only when the game is over */}
      {gameOver && <WinningModal winner={winner} bettedOn={bettedOn} bettingAmount={bettingAmount} stake={stake}/>}
      <div className="flex flex-col gap-2 justify-center items-center">
        <IndividualRacer colour="blue" position={bluePosition}/>
        <IndividualRacer colour="green" position={greenPosition}/>
        <IndividualRacer colour="pink" position={pinkPosition}/>
        <IndividualRacer colour="yellow" position={yellowPosition}/>
      </div>


    </div>
  )

}

const IndividualRacer = ({colour, position}) => {
  const upperCaseColour = colour.charAt(0).toUpperCase() + colour.slice(1)
  const [animationStage, setAnimationStage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStage((prevStage) => {
        if (prevStage === 1) {
          return 2;
        } else {
          return 1;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-11/12 bg-${colour}-500 flex text-white rounded-md`}>
      <img src={`/assets/Horses/${upperCaseColour}Run_${animationStage}.png`} alt="" style={{left: `${position}%`}}
           className="w-16 relative"/>
      <img src="/assets/FinishLine.png" alt="" className=" h-100 relative left-[90%] w-4"/>
      <p>Current Postion: {position}</p>
    </div>
  );
}

const WinningModal = ({winner, bettedOn, stake, bettingAmount}) => {
  const stakeInt = parseInt(stake);
  const bettingAmountInt = parseInt(bettingAmount);
  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md flex flex-col justify-center items-center">
        {bettedOn === winner ? (
          <>
            <h1 className="text-2xl">You win!!!</h1>
            <p>You betted {bettingAmountInt}m<sup>3</sup> of oxygen</p>
            <p>Your stake was {stakeInt}</p>
            <p>Your total winnings are {stakeInt * bettingAmountInt} m<sup>3</sup> of oxygen</p>

          </>
        ) : (
          <>
            <h1>You Lose!!!</h1>
            <p>You betted {bettingAmountInt}m<sup>3</sup> of oxygen</p>
          </>
        )}
        <div className="flex justify-between w-100 gap-10">
          <NavLink to="/horse-racing-bet" className={"rounded-md bg-green-500 p-2"}>Play Again</NavLink>
          <NavLink to="/home" className={"rounded-md bg-red-500 p-2"}>Go Home</NavLink>

        </div>
      </div>
    </div>
  );
}
const LosingModal = ({winner}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-2xl">The winner is: {winner}</h1>
        <button>Play Again</button>
      </div>
    </div>
  );
}