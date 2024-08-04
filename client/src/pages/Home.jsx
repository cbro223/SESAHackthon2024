import React from 'react';
import Header from '../components/Header';
import Card from "../components/Card";

import { NavLink } from 'react-router-dom';

export default function Home() {

  const PlanetaryPlummet = "Detonate one of three enemy planets - victory hinges on your choice!";

  const StellarSlots = "Gaze out the window, and watch carefully... it might be a breath of fresh air";

  const GalacticGallop = "Cheer on your favourite extra-terrestial friends as they race to the finish line!";

  const cardSpread = {
    padding: 40,
    paddingTop: 100
  };

  return (
    <>
      <div className="slide-in-blurred-top">
      <Header/>
      </div>
      <div className="justify-center g-cover bg-center w-full home-page" style={{height: '80vh'}}>
        <div style={cardSpread} className={'card-container drop-shadow-[2px_2px_10px_#5bc8af]'}>
          <Card title="Galactic Gallop" text={GalacticGallop} imgUrl="./assets/cards/GalacticGallopIcon.PNG"
                linkTo={'/horse-racing-bet'}/>
          <Card title="Planetary Plummet" text={PlanetaryPlummet} imgUrl="./assets/cards/GunGameIcon.png"
                linkTo={'/planetary-plummet'}/>
          <Card title="Stellar Slots" text={StellarSlots} imgUrl="./assets/cards/StellarSlotsIcon.png"
                linkTo={'/slots'}/>
        </div>
      </div>
      <div className={'w-full bg-red-500'}>
        <NavLink to={"/credits"} className={'disc'}>
          <span className="invisible">Credits</span><span className={"symbol symbol--disc"}></span>
        </NavLink>
      </div>
    </>
  );
}

