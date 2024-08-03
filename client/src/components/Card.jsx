import React, { useState } from 'react';

export default function Card({ title, text, imgUrl }) {
  const [hovering, setHovering] = useState(false);

  function handleMouseEnter() {
    setHovering(true);
  }

  function handleMouseLeave() {
    setHovering(false);
  }

  return (
    <div 
      className="max-w-sm rounded overflow-hidden shadow-lg" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      style={{float: 'left'}}
    >
      <img 
        className="w-full" 
        src={imgUrl}
        alt="Sunset in the mountains"
      />
      {hovering && <DropDown title={title} text={text} />}
    </div>
  );
}

function DropDown({ title, text }) {
  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {text}
      </p>
    </div>
  );
}