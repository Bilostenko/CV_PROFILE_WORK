import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import european_seabass from '../../assets/fish/european-seabass.png';

const Fish = () => {
  const [isSwimming, setIsSwimming] = useState(true);

  const fishStyle = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' },
    reset: true,
    reverse: isSwimming,
    loop: true,
    config: { duration: 2000 },
  });

  return (
    <div style={{ width: '100%', height: '100px', position: 'relative' }}>
      <animated.img
        src={european_seabass}
        alt="Fish"
        style={{ ...fishStyle, position: 'absolute', bottom: 0 }}
      />
      <button onClick={() => setIsSwimming(!isSwimming)}>
        {isSwimming ? 'Stop Swimming' : 'Start Swimming'}
      </button>
    </div>
  );
};

export default Fish;
