import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/header";
import { getOxygen, updateOxygen } from "../utils";
export default function HorseRacingBetting() {
  useEffect(() => {
    console.log(getOxygen());
  }, []);
  return (
    <div>
      <Header/>
      <div>
        <h1>Horse Racing Betting</h1>
        <h2>Oxygen: 6000</h2>
        <div>
          <Competitor colour="Blue"/>
        </div>
      </div>


    </div>
  )
}

const Competitor = ({colour}) => {
  return (
    <div className={`competitor ${colour}`}>
      <div className="horse"></div>
      <img src={`../assets/Horses/BlueRun_1.PNG`} alt="" />
    </div>
  )
}