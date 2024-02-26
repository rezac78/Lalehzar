import LoadingPage from '@/components/Shared/Loading/Loading';
import React, { useEffect, useState } from 'react';

const FlappyBird = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/flappybird.js';
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <canvas className="m-auto mt-2" id="board"></canvas>
    </div>
  );
};

export default FlappyBird;
