import React, { useState, useEffect, useRef } from "react";
import data from "../data.json";
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header flex items-center p-4 bg-[#202060] text-white">
                <img src="./assets/Logo_NoRing.png" alt="" className="h-16 object-contain"/>

            <NavLink to={"/home"} activeStyle className={"bubbly text-6xl"}>Lunar Luck</NavLink>

            <div className="flex-grow"></div> 
            <Oxygen data={data}/>
        </div>
    );
}

const Oxygen = ({ data }) => {
    const oxygenPercentage = data.oxygen / 10000 * 100;
    const [colour, setColour] = useState("bg-green-500");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

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
            <div className="outer-bar w-44 border-white rounded-md border-solid border-2 cursor-pointer" onClick={toggleDropdown}>
                <div className={`inner-bar ${colour} whitespace-nowrap`} style={{ width: `${oxygenPercentage}%` }}>
                <p>{data.oxygen} m<sup>3</sup></p>
                </div>
            </div>
            {dropdownVisible && (
                <div ref={dropdownRef} className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10 text-black">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Add</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Withdraw</li>
                    </ul>
                </div>
            )}
        </div>
    );
}