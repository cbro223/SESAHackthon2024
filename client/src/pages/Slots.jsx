// TODO: Chris TONIGHT


import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header";
import { getOxygen, updateOxygen } from "../utils";
// import SlotsBanner from "./assets/cards/StellarSlotsBanner.PNG"


export default function SlotsPage() {
  return (
    <div className="h-screen bg-gradient-to-r from-[--scheme-1] via-[--scheme-4] to-[--scheme-5]">
      {/* <img src={SlotsBanner} alt="Banner title"/> */}
        <Header />
        <h1 className="text-5xl bubbly items-center justify-center flex mb-3">Stellar Slots</h1>        
        <SlotMachine/>
    </div>
  );
}

function SlotMachine() {
  return (
    <div>
      <Spinner/>
      <Spinner/>
      <Spinner/>
      <button onClick={() => console.log("ROLLING")}>ROLL</button>
    </div>
  );
}

function Spinner() {
  return (
    <div style={{float: 'left', maxWidth: '100px'}}>  
      <img src="./assets/Icons/BlueIcon.PNG"/>
    </div>
  )
}


