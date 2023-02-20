import React, { useState, useEffect } from 'react';

const Car = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${scrollY}px)`,
        transition: 'transform 0.3s ease-in-out',
      }}
    >
        hi
      {/* Your card content here */}
    </div>
  );
};

export default Car;