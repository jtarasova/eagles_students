import React, { useEffect, useState } from 'react';

export default function JokeComponent({ joke, setJoke }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      setJoke(null);
    }
    const int = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log('interval');
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [count]);

  return (
    <div>
      {joke}
      ,
      {' '}
      {count}
    </div>
  );
}
