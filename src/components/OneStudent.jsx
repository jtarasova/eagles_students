import React, { useState } from 'react';

function OneStudent({ student, deleteHandler }) {
  const [count, setCount] = useState(0);

  const incCounter = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  console.log('render studentcard');
  return (
    <div className="col-4 mt-5">

      <div className="card" style={{ width: '18rem' }}>
        <img src={`https://github.com/${student.git}.png?size=400`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => deleteHandler(student.id)}
          >
            Удоли
            {' '}
            {count}
          </button>
          <button onClick={incCounter}>+</button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(OneStudent);
