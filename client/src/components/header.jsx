import React from "react";
import data from "../data.json";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header flex justify-between items-center p-4 bg-[#202060] text-white">
            <NavLink to={"/home"} activeStyle >
                <h1 className="text-3xl">Logo</h1>
            </NavLink>
            <Oxygen data={data} />
        </div>
    );
}

const Oxygen = ({ data }) => {
    const oxygenPercentage = data.oxygen / 10000 * 100;
    const [colour, setColour] = useState("bg-green-500");
    useEffect(() => {


        if (oxygenPercentage < 20) {
            setColour("bg-red-500");
        }
        else if (oxygenPercentage < 50) {
            setColour("bg-yellow-500");
        }
        else if (oxygenPercentage < 70) {
            setColour("bg-orange-500");
        }
        else {
            setColour("bg-green-500");
        }
    }, [oxygenPercentage]);

    return (
        <div className="outer-bar w-1/4 border-white rounded-md border-solid border-2">

            <div className={`inner-bar ${colour} whitespace-nowrap`} style={{ width: `${oxygenPercentage}%` }}>
                <p>{data.oxygen} moles</p>

            </div>
        </div>
    );
}