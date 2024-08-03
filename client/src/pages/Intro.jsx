import React from 'react';
import { NavLink } from 'react-router-dom';
import bgImage from "../Bkg_TwoClouds.png";
import BubblyButton from '../components/confettibutton';

export default function Intro() {
  return (
    <>
      <div style={{ backgroundImage: `url(${bgImage})` }} className="flex items-center justify-center g-cover bg-center w-full h-screen">
        <div className="block items-center justify-center">
          <p className="text-3xl justify-center flex"> WELCOME TO </p>
          <p className="text-9xl justify-center bubbly flex"> LUNAR LUCK </p>
          <p className="text-2xl justify-center flex"> GAMBLING OUTSIDE OF THIS WORLD</p>
        <NavLink to={"/home"} className= "">
        <BubblyButton></BubblyButton>
        </NavLink>
        </div>
      </div>
    </>
  );
};