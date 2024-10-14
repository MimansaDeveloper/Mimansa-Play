import React from 'react';
import './Balloon.css';

const Balloon = ({ isPopped , imageSrc }) => {
  const generateConfettiStyles = () => {
    const randomRotation = Math.floor(Math.random() * 360);
    const randomScale = Math.random() * 1 + 0.5;
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    return {
      transform: `rotate(${randomRotation}deg) scale(${randomScale})`,
      backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
      '--confetti-final-x': `${randomX}px`,
      '--confetti-final-y': `${randomY}px`,
    };
  };

  const generateFragmentStyles = () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    return {
      '--fragment-final-x': `${randomX}px`,
      '--fragment-final-y': `${randomY}px`,
    };
  };

  return (
    <div className="balloon-container">
      {!isPopped ? (
        <div className="balloon">
          <img src={imageSrc} alt="Balloon" />
        </div>
      ) : (
        <div className="popped-container">
          <div className="fragment-container">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="balloon-fragment"
                style={generateFragmentStyles()}
              />
            ))}
          </div>
          <div className="confetti-container">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={generateConfettiStyles()}
              />
            ))}
          </div>
          <div className="animal-reveal">🐯</div>
        </div>
      )}
    </div>
  );
};

export default Balloon;
