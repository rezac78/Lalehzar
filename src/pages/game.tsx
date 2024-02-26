import React, { useEffect } from 'react';

const FlappyBird = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/flappybird.js';
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <canvas className="m-auto mt-2" id="board"></canvas>
    </div>
  );
};

export default FlappyBird;
