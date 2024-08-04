import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

export default function Card({title, text, imgUrl, linkTo}) {
  const [hovering, setHovering] = useState(false);

  function toggleMouseOver() {
    setHovering(!hovering);
  }


  return (
    <>
      <NavLink to={linkTo}>
        <div className="slide-in-blurred-top">
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          onMouseEnter={toggleMouseOver}
          onMouseLeave={toggleMouseOver}
          style={{float: 'left', position: 'relative', margin: 0}}
        >
          <img className="w-full" src={imgUrl} alt={title}/>
          <div>
            {hovering && <DropDown title={title} text={text}/>}
          </div>
        </div>
        </div>
      </NavLink>
    </>
  );
}

function DropDown({title, text}) {
  return (
    <div className="px-6 py-4 bg-blue bg-[--scheme-1]">
      <div className="font-bold text-xl text-white mb-2">{title}</div>
      <p className="text-white text-base">
        {text}
      </p>
    </div>
  );
}