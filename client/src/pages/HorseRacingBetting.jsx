import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/header";
import { getOxygen, updateOxygen } from "../utils";
import GalacticBanner from "./assets/cards/GalacticGallopBanner.PNG"

export default function HorseRacingBetting() {
  return (
    <div className="h-screen bg-gradient-to-r from-[--scheme-1] via-[--scheme-4] to-[--scheme-5]">
      <img src={GalacticBanner} alt="Banner title"/>
      <Header />
      <h1 className="text-5xl blocky items-center justify-center flex mb-3">Galatic Gallops</h1>
      
      
      <div>
        <div className="flex flex-col bg- text-white">
          <h2 className="text-2xl items-center justify-center flex">Place your bets</h2>
          <div className="competitors flex flex-col gap-2 px-4  py-2">
          <Competitor colour="green" name="Galactic Glider" stakes="1.05"/>
          <Competitor colour="blue" name="Pulsar Pacer" stakes="1.91" />
          <Competitor colour="yellow" name="Orbital Overdrive" stakes="2.16" />
          <Competitor colour="pink" name="Lightyear McQueen" stakes="2.76"/>
        </div>
        </div>
      </div>
    </div>
  )
}

const Competitor = ({ colour, name, stakes}) => {
  const upperCaseColour = colour.charAt(0).toUpperCase() + colour.slice(1)
  const [betAmount, setBetAmount] = useState(0)
  const buttonClasses = "bg-gray-500 rounded-md p-2"

  const [dropper, setDropper] = useState(false)

  let onInfoHover = () => {
    console.log('Hovered')
  }

  return (
    <div className={`competitor w-100 bg-${colour}-500 p-2 flex items-center text-white rounded-md`}>

      {/* LEAVE THIS DIV HERE SO THE COLOURS STILL GET RENDERED IN  */}
      {/* <div className="bg-red-500 bg-pink-500 bg-yellow-500 bg-blue-500 ">

      </div> */}
      <img src={`../assets/Icons/${upperCaseColour}Icon.PNG`} alt="" className="w-16" />
      <div className="flex justify-between items-center w-1/2">
        <p className="text-2xl not-as-bubbly w-60">
          {name}
          <sup onMouseEnter={onInfoHover} onMouseLeave={onInfoHover}>&#x1F6C8;</sup>
        </p>
        <p className="nunito font-bold text-xl">Returns: {stakes}</p>
        <div className="flex ml-30">
          <button className={buttonClasses} onClick={() => setBetAmount(betAmount - 10)}>-10</button>
          <input type="text" value={betAmount} className="bg-gray-700 w-10 p-2 rounded-md"/>
          <button className={buttonClasses} onClick={() => setBetAmount(betAmount + 10)}>+10</button>
        </div>
      </div>


    </div>
  )
}