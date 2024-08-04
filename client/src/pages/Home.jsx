import React from 'react';
import Header from '../components/Header';
import Card from "../components/Card";
import bgImage from "../BkgBasic.png";

import { NavLink } from 'react-router-dom';

export default function Home() {

  const PlanetaryPlummet = "Detonate one of three enemy planets - victory hinges on your choice!";

  const StellarSlots = "Gaze out the window, and watch carefully... it might be a breath of fresh air";

  const GalacticGallop = "Cheer on your favourite extra-terrestial friends as they race to the finish line!";

  const cardSpread = {
    padding: 40,
    paddingTop: 50
  };

  return (
    <>
      <div className="slide-in-blurred-top">
      <Header/>
      
      <div

          style={{ backgroundImage: `url(${bgImage})` }}
          className="flex flex-col items-center justify-center bg-cover bg-center w-full h-screen"
          >
      <div className="justify-center w-full" style={{height: '80vh'}}>
        <div  className={'card-container drop-shadow-[2px_2px_10px_#5bc8af] py-[0.5vh] px-5'}>
          <Card title="Galactic Gallop" text={GalacticGallop} imgUrl="./assets/cards/GalacticGallopIcon.PNG"
                linkTo={'/horse-racing-bet'}/>
          <Card title="Planetary Plummet" text={PlanetaryPlummet} imgUrl="./assets/cards/GunGameIcon.png"
                linkTo={'/planetary-plummet'}/>
          <Card title="Stellar Slots" text={StellarSlots} imgUrl="./assets/cards/StellarSlotsIcon.png"
                linkTo={'/slots'}/>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

