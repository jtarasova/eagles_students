import React, { useState, useCallback } from 'react';
import OneStudent from './OneStudent';
import StudentsForm from './StudentsForm';

export default function StudentPage({ students }) {
  const [currentStudents, setCurrentStudents] = useState(students);

  const deleteHandler = useCallback((id) => {
    fetch(`/api/students/del/${id}`, {
      method: 'POST',
    })
      .then((res) => {
        if (res.ok) {
          setCurrentStudents((prev) => prev.filter((el) => el.id !== id));
        }
      })
      .catch(() => console.log('Error'));
  }, []);
  return (
    <>
      <StudentsForm setCurrentStudents={setCurrentStudents} />
      <div className="row mt=5">
        {currentStudents?.map((el, index) => (
          <OneStudent
            key={el.id}
            student={el}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </>
  );
}
