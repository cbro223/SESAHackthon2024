import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header";
export default function HorseRacing() {
  const chosen = "Blue";
  const [bluePosition, setBluePosition] = useState(0); // Initial positions for 4 horses
  const [greenPosition, setGreenPosition] = useState(0);
  const [pinkPosition, setPinkPosition] = useState(0);
  const [yellowPosition, setYellowPosition] = useState(0);

  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if(!gameOver) {
      const interval = setInterval(() => {
        const moveBlueBy = Math.random() * 0.05;
        const moveGreenBy = Math.random() * 0.05;
        const movePinkBy = Math.random() * 0.05;
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
  
      }, 1); // Update positions every 1ms
    return () => clearInterval(interval);

    }
    
  }, [bluePosition, greenPosition, pinkPosition, yellowPosition, gameOver]);
  return (


    <div>
      <Header />
      <div className="flex flex-col gap-2 justify-center items-center">
        <IndividualRacer colour="blue" position={bluePosition} />
        <IndividualRacer colour="green" position={greenPosition} />
        <IndividualRacer colour="pink" position={pinkPosition} />
        <IndividualRacer colour="yellow" position={yellowPosition} />
      </div>


    </div>
  )

}

const IndividualRacer = ({ colour, position }) => {
  const upperCaseColour = colour.charAt(0).toUpperCase() + colour.slice(1)

  return (
    <div className={`w-11/12 bg-${colour}-500 flex text-white rounded-md`}>
      <img src={`/assets/Horses/${upperCaseColour}Run_1.png`} alt="" style={{ left: `${position}%` }} className="w-16 relative" />
      <div className="w-2 bg-red-500 h-100 relative left-[90%]"></div>
      <p>Current Postion: {position}</p>
    </div>
  );
}