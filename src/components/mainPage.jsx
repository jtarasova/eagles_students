import React, { useEffect, useState } from 'react';
import JokeComponent from './JokeComponent';

export default function MainPage() {
  const [joke, setJoke] = useState(null);
  const [word, setWord] = useState('');

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((joke) => setJoke(joke.value));
  }, []);

  useEffect(() => {
    if (word) {
      fetch('/api/word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ word }),
      });
    }
  }, [word]);

  const changeHandler = (e) => {

  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('---->>', Object.fromEntries(new FormData(e.target)));
  };

  return (
    <div className="color">
      <form onSubmit={submitHandler}>
        <input
          name="words"
          type="text"
        />
        <input
          name="words2"
          type="text"
        />
        <button type="submit">ok</button>
      </form>
      MainPage
      {joke && <JokeComponent joke={joke} setJoke={setJoke}/>}
      <button onClick={() => setJoke(null)}>close</button>
    </div>
  );
}
