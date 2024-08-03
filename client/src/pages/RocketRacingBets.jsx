import React from "react";
import Header from "../components/header";
import { useState } from "react";

export default function RocketRacingBets() {

  const winners = [
    'Thomas Adams',
    'Kevin Jia',
    'Adreas Kemphr-Lier'
  ]

  return (
    <>
      <Header />
      <RocketBettingOption title={'First Place'} options={winners}/>
    </>
  );
}

function RocketBettingOption({options}) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  return (
    <>
    <ul>
      {options.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
    </>
  )
}
