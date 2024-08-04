import React, {useEffect, useRef, useState} from "react";
import data from "../data.json";
import {NavLink} from 'react-router-dom';
import { fetchOxygenData, updateOxygenData } from "../utils";

export default function Header() {
  return (
    <div className="header flex items-center p-4 bg-[#202060] text-white">
      <img src="./assets/Logo_NoRing.png" alt="" className="h-16 object-contain"/>

      <NavLink to={"/home"} className={"bubbly text-6xl"}>Lunar Luck</NavLink>

      <div className="flex-grow"></div>
      <Oxygen/>
    </div>
  );
}

const Oxygen = () => {
  const [oxygen,setOxygen] = useState(0)

  const [oxygenPercentage,setOxygenPercentage] = useState(0)
  const [colour, setColour] = useState("bg-green-500");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchOxygenData();
        setOxygen(result.oxygen)
        setOxygenPercentage(result.oxygen /10000 * 100)

      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
    
    getData()
    const intervalId = setInterval(getData, 500); // Call getData every 2 seconds

  return () => clearInterval(intervalId);
  }, [oxygen, oxygenPercentage]);

  useEffect(() => {
    if (oxygenPercentage < 20) {
      setColour("bg-red-500");
    } else if (oxygenPercentage < 50) {
      setColour("bg-yellow-500");
    } else if (oxygenPercentage < 70) {
      setColour("bg-orange-500");
    } else {
      setColour("bg-green-500");
    }
  }, [oxygenPercentage]);

  useEffect(() => {
    if (dropdownVisible && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      if (dropdownRect.right > window.innerWidth) {
        dropdownRef.current.style.right = '0';
        dropdownRef.current.style.left = 'auto';
      }
    }
  }, [dropdownVisible]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="relative w-40 mr-4">
      <img src="/assets/o2logo.png" style={{position: "absolute", transform: "scale(2, 2)"}}/>
      <div class="bg-cover bg-center">
        <div className="outer-bar bg-blue-200 w-44 border-blue-200 rounded-md border-solid border-4 cursor-pointer" 
            onClick={toggleDropdown}
            style={{position: 'relative'}}>
          <div className={`inner-bar rounded-md ${colour} whitespace-nowrap`} style={{width: `${oxygenPercentage}%`}}>
            <p className="nunito text-black" style={{transfrom: "translate(0, -50%)"}}>{oxygen} m<sup>3</sup></p>
          </div>
        </div>
      </div>
      {/* {dropdownVisible && (
        <div ref={dropdownRef} style={{transform: "translateZ(tz)"}} className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10 text-black">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Add</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Withdraw</li>
          </ul>
        </div>
      )} */}
    </div>
  );
}