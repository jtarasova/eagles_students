import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './mainPage';
import NavBar from './NavBar';
import StudentPage from './studentPage';

export default function App({ students }) {
  console.log('From app.jsx');
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/students" element={<StudentPage students={students} />} />
      </Routes>
    </div>
  );
}
