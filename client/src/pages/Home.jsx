import React from 'react';
import Header from '../components/header';
import Card from "../components/Card";

export default function Home() {

    const GalacticGames = "Imagine a world where your bets are fueled by the oxygen of currency. Breathe life into every wager you place. Just as oxygen is vital for life, currency becomes the lifeblood of your betting experience, empowering you to engage with sports on a whole new level.";
    const GalUrl = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp";

    const StellarSlots = "SLOTS SLOTS SLOTS";
    const StelUrl = "https://as2.ftcdn.net/v2/jpg/05/68/98/19/1000_F_568981973_7pf09ozy9dWWfvI2fPtcmXEMWzBcevJy.jpg";

    const cardSpread = {
        padding: 10
    };
    
    return (
      <>
        <Header/>
        <div style={cardSpread} className={'card-container'}>
          <Card title="Galactic Games" text={GalacticGames} imgUrl={GalUrl}/>
          <Card title="Stellar Slots" text={StellarSlots} imgUrl={StelUrl}/>
          <Card title="Galactic Games" text={GalacticGames} imgUrl={GalUrl}/>
        </div>
      </>
    );
}