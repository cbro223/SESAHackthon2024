import React from 'react';
import Header from '../components/Header';
import Card from "../components/Card";

export default function Home() {

  const RocketRacers = "The fastest vehicles across the Milky Way - will Luna Verstappen or Nebula Norris take the win?";

  const StellarSlots = "Gaze out the window, and watch carefully... it might be a BREATH OF FRESH AIR";

  const GalacticGallop = "Cheer on your favourite extra-terrestial friend as they race to the finish line, dodging asteroids and UFOs";

  const cardSpread = {
    padding: 40
  };

  return (
    <>
      <Header/>
      <div className="justify-center g-cover bg-center w-full h-screen home-page">
        <div style={cardSpread} className={'card-container'}>
          <Card title="Galactic Gallop" text={GalacticGallop} imgUrl="./assets/cards/GalacticGallop.PNG"
                linkTo={'/horse-racing-bet'}/>
          <Card title="Rocket Racers" text={RocketRacers} imgUrl="./assets/cards/RocketRacers.png"
                linkTo={'/rocket-racing-bet'}/>
          <Card title="Stellar Slots" text={StellarSlots} imgUrl="./assets/cards/StellarSlotsIcon.png"
                linkTo={'/slots'}/>
        </div>
      </div>
    </>
  );
}

