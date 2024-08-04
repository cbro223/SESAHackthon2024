import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import bgImage from "../Bkg_TwoClouds.png";
import IntroButton from '../components/IntroPageButton';

export default function Intro() {
  const [showContent, setShowContent] = useState(true);

  const handleNavigation = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setShowContent(false); // Trigger the exit transition
  };

  return (
    <>
    <div className="bubbles">
      <CSSTransition
        in={showContent}
        timeout={500}
        classNames="slide-up"
        unmountOnExit
        onExited={() => {
          // Navigate to the next page after the exit transition is complete
          window.location.href = '/home';
        }}
      >
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="flex flex-col items-center justify-center bg-cover bg-center w-full h-screen"
        >
          <div className="flex flex-col items-center justify-center gap-9">
            <p className="text-3xl justify-center flex nunito-bold pb-0">WELCOME TO</p>
            <p className="text-9xl justify-center bubbly flex p-0 drop-shadow-[2px_2px_10px_#c7b8bf]">LUNAR LUCK</p>
            <p className="text-2xl justify-center flex nunito-bold">GAMBLING OUTSIDE OF THIS WORLD</p>
            <NavLink to="/home" onClick={handleNavigation}>
              <IntroButton />
            </NavLink>
          </div>
        </div>
      </CSSTransition>
      </div>
    </>
  );
}
