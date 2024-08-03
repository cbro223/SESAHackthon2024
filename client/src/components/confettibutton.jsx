import React, { useState } from 'react';

const BubblyButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animateButton = (e) => {
    e.preventDefault();
    setIsAnimating(false); // Reset animation
    void e.target.offsetWidth; // Trigger reflow
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setIsAnimating(false); // End animation after 700ms
    }, 700);
  };

  return (
    <button
      className={`bubbly-button ${isAnimating ? 'animate' : ''}`}
      onClick={animateButton}
    >
      Click Me
    </button>
  );
};

export default BubblyButton;
