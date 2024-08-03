import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Card({ title, text, imgUrl, linkTo }) {
  const [hovering, setHovering] = useState(false);

  function toggleMouseOver() {
    setHovering(!hovering);
  }

  const content = {
    position: 'absolute', /* Position the background text */
    bottom: 0, /* At the bottom. Use top:0 to append it to the top */
    background: 'rgb(0, 0, 0)', /* Fallback color */
    background: 'rgba(0, 0, 0, 0.5)', /* Black background with 0.5 opacity */
    color: '#f1f1f1', /* Grey text */
    width: '100%', /* Full width */
    padding: '20px', /* Some padding */
  }


  return (
    <>
      <NavLink to={linkTo}>
        <div 
          className="max-w-sm rounded overflow-hidden shadow-lg" 
          onMouseEnter={toggleMouseOver} 
          onMouseLeave={toggleMouseOver}
          style={{float: 'left', positition: 'relative', margin: 0}}
        >
          <img className="w-full" src={imgUrl} alt={title}/>
          <div>
          {hovering && <DropDown title={title} text={text} />}
          </div>
        </div>
      </NavLink>
    </>
  );
}

function DropDown({ title, text }) {
  return (
    <div className="px-6 py-4 content">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {text}
      </p>
    </div>
  );
}