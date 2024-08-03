import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header";
export default function HorseRacing() {
  const chosen = "Blue";
  const [position, setPosition] = useState(0); // Initial positions for 4 horses

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) =>
        prevPosition += 1
      );
    }, 100); // Update positions every 100ms
    
  }, []);
  return (

    
    <div>
      <Header/>
      <div className="flex flex-col gap-2">
        <img src="/assets/Horses/BlueRun_1.png" alt="" style={{ left: `${position}%` }}  />
        <IndividualRacer colour="blue" />
        <IndividualRacer colour="green"/>
        <IndividualRacer colour="pink"/>
        <IndividualRacer colour="yellow"/>
      </div>


    </div>
  )

}

const IndividualRacer = ({ colour }) => {
  return (
    <div>
      <h1>Individual Racer {colour}</h1>
    </div>
  );
}