/* eslint-disable no-unused-vars */
// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import ListOfMusic from './pages/ListOfMusic';


const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListOfMusic />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
