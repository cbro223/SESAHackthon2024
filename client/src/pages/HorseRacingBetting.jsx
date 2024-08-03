import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/header";
import { getOxygen, updateOxygen } from "../utils";
export default function HorseRacingBetting() {
  return (
    <div>
      <Header />
      <div className="">
        <h1 className="text-3xl">Horse Racing Betting</h1>
        <div className="flex flex-col bg-black text-white ">
          <h2 className="text-2xl">Place your bets</h2>
          <div className="competitors flex flex-col gap-2 px-4  py-2">
          <Competitor colour="green" name="Joey" stakes="1.05"/>
          <Competitor colour="blue" name="Blue" stakes="1.91" />
          <Competitor colour="yellow" name="Blue" stakes="2.16" />
          <Competitor colour="pink" name="Blue" stakes="2.76"/>
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
  return (
    <div className={`competitor w-100 bg-${colour}-500 p-2 flex items-center text-white rounded-md`}>

      {/* LEAVE THIS DIV HERE SO THE COLOURS STILL GET RENDERED IN  */}
      {/* <div className="bg-red-500 bg-pink-500 bg-yellow-500 bg-blue-500 ">

      </div> */}
      <img src={`../assets/Icons/${upperCaseColour}Icon.PNG`} alt="" className="w-16" />
      <div className="flex justify-between w-1/2">
        <p>{name}</p>
        <p>Returns: {stakes}</p>
        <div className="flex gap-1">
          <button className={buttonClasses} onClick={() => setBetAmount(betAmount - 10)}>-10</button>
          <input type="text" value={betAmount} className="bg-gray-700 w-10 p-2 rounded-md"/>
          <button className={buttonClasses} onClick={() => setBetAmount(betAmount + 10)}>+10</button>
        </div>
      </div>


    </div>
  )
}