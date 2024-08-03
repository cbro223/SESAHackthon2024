import React, { useState, useEffect, useRef } from "react";
import data from "../data.json";
import { NavLink } from "react-router-dom";

export default function RaceButton(){
  return(
    <NavLink to="/">
      Play the game
    </NavLink>
  )
}