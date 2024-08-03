// TODO: Chris TONIGHT


import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header";
import { getOxygen, updateOxygen } from "../utils";

export default function SlotsPage() {
  return (
    <div className="h-screen bg-gradient-to-r from-[--scheme-1] via-[--scheme-4] to-[--scheme-5]">
        <Header />
        <div/>
        <div className="flex flex-col text-white">
          <div className="w-100 flex justify-center">
            <img src="/assets/Banners/StellarSlotsBanner.png" alt="Banner Title" className="w-1/2" />
          </div>
          </div>
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


