import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/header";
import { getOxygen, updateOxygen } from "../utils";
import RaceButton from '../components/RaceButton'
import { NavLink } from "react-router-dom";

export default function HorseRacingBetting() {
  const [bettingAmount, setBettingAmount] = useState(0)
  const [stake, setStake] = useState(0)
  const [bettedColour, setBettedColour] = useState("green")

  const updateStates = (bettingAmount, stake, bettedColour) => {
    setBettingAmount(bettingAmount)
    setStake(stake)
    setBettedColour(bettedColour)
  }
  return (
    <div className="h-screen from-[--scheme-1] via-[--scheme-4] to-[--scheme-5] slater">

      <Header />
      {/* <h1 className="text-5xl blocky items-center justify-center flex mb-3">Galatic Gallops</h1> */}


      <div>
        <div className="flex flex-col text-white">
          <div className="w-100 flex justify-center">
            <img src="/assets/Banners/GalaticGallopBanner.png" alt="Banner title" className="w-1/2 drop-shadow-[2px_2px_10px_#c7b8bf]" />
          </div>
          <div className="flex items-center justify-center">
          <div className="competitors flex flex-col gap-2 px-4 py-2 w-full max-w-3xl justify-center">
            <Competitor colour="green" name="Galactic Glider" stakes="1.05" about={"GREEN BOI"} updateStates={updateStates}/>
            <Competitor colour="blue" name="Pulsar Pacer" stakes="1.91" about={"BLUE BITCH"}/>
            <Competitor colour="yellow" name="Orbital Overdrive" stakes="2.16" about={"YELLOW FELLOW"}/>
            <Competitor colour="pink" name="Lightyear McQueen" stakes="2.76" about={"PINKIE"}/>
          </div>
          </div>
          <NavLink to= {`/horse-racing/${bettedColour}/${stake}/${bettingAmount}`} className="styled-button bold text-xl">
            Start the race!
          </NavLink>

        </div>
      </div>
    </div>
  )
}

const Competitor = ({ colour, name, stakes, about, updateStates }) => {
  const upperCaseColour = colour.charAt(0).toUpperCase() + colour.slice(1)
  const [betAmount, setBetAmount] = useState(0)
  const buttonClasses = "bg-gray-500 border-[solid .25em transparent] rounded-lg p-2"
  // useEffect(() => {
  //   updateStates(betAmount, stakes, colour)
  // },[betAmount])
  const [dropper, setDropper] = useState(false)

  let onInfoHover = () => {
    console.log(about)
  }

  return (
    <div className={`competitor w-100 bg-${colour}-500 p-2 flex items-center text-white rounded-md`}>

      {/* LEAVE THIS DIV HERE SO THE COLOURS STILL GET RENDERED IN  */}
      {/* <div className="bg-red-500 bg-pink-500 bg-yellow-500 bg-blue-500 ">

      </div> */}
      <img src={`../assets/Icons/${upperCaseColour}Icon.PNG`} alt="" className="w-16 drop-shadow-[2px_2px_10px_#c7b8bf]" />
      <div className="flex justify-between items-center w-full">
        <p className="text-2xl not-as-bubbly w-60">
          {name}
          <sup onMouseEnter={onInfoHover} onMouseLeave={onInfoHover}>&#x1F6C8;</sup>
        </p>
        <p className="nunito font-bold text-xl">Returns: {stakes}</p>
        <div className="flex ml-30">
          <button className="styled-button" onClick={() => setBetAmount(betAmount - 10)}>-10</button>
          <input type="text" value={betAmount} className="bg-black border-[cyan] w-[4rem] rounded-md p-2 text-center text-white" />
          <button className="styled-button" onClick={() => setBetAmount(betAmount + 10)}>+10</button>
        </div>
      </div>


    </div>
  )
}