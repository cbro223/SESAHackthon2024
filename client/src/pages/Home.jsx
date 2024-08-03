import React from 'react';
import Header from '../components/header';
import Card from "../components/Card";
import bgImage from "../Bkg_TwoClouds.png";

export default function Home() {

    const RocketRacers = "The fastest vehicles across the Milky Way - will Luna Verstappen or Nebula Norris take the win?";
    const RocUrl = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp";

    const StellarSlots = "Gaze out the window, and watch carefully... You could be win ";
    const StelUrl = "https://as2.ftcdn.net/v2/jpg/05/68/98/19/1000_F_568981973_7pf09ozy9dWWfvI2fPtcmXEMWzBcevJy.jpg";

    const GalacticGallop = "Cheer on your favourite extra-terrestial friend as they race to the finish line, dodging asteroids and UFOs";
    const GalUrl = "https://as2.ftcdn.net/v2/jpg/05/68/98/19/1000_F_568981973_7pf09ozy9dWWfvI2fPtcmXEMWzBcevJy.jpg";

    const cardSpread = {
        padding: 10
    };

    return (
      <>
        <Header/>
        <div style={{ backgroundImage: `url(${bgImage})` }} className="justify-center g-cover bg-center w-full h-screen">
          <div style={cardSpread} className={'card-container'}>
            <Card title="GalacticGallop" text={GalacticGallop} imgUrl={RocUrl}/>
            <Card title="StellarSlot" text={StellarSlots} imgUrl={StelUrl}/>
            <Card title="Galactic Gam" text={RocketRacers} imgUrl={RocUrl}/>
          </div>
        </div>
      </>
    );
}


/*
 style={{ backgroundImage: `url(${bgImage})` }} className="flex flex-col items-center justify-center g-cover bg-center w-full h-screen"
*/