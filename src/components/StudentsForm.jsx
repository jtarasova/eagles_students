import React, { useState, useEffect } from 'react';

export default function StudentsForm({ setCurrentStudents }) {
  const [input, setInput] = useState({ name: '', git: '' });
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   alert('1XBET!!!!');
  // }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    fetch('/api/students/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((student) => {
        setCurrentStudents((prev) => [student, ...prev]);
        setInput({ name: '', git: '' });
      });
  };

  const changeHandler = (e) => {
    setInput((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ));
    setCount((prev) => prev + 1);
  };

  console.log('Student Form');
  return (
    <div className="row mt-3">
      <h1>{count}</h1>
      <div className="col">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Git</label>
            <input
              type="text"
              name="git"
              value={input.git}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={changeHandler}
            />
          </div>
          <button>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
