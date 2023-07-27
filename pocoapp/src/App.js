import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home';
import Inwestycje from './components/inwestycje';
import Wydatki from './components/wydatki';
import Oszczedzanie from './components/oszczedzanie';
import Kalkulator from './components/kalkulator';

const App = () => {
  const [currentCategory, setCurrentCategory] = useState('home');

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div>
      <Navbar onCategoryChange={handleCategoryChange} />
      <div className="content">
        {currentCategory === 'home' && <Home />}
        {currentCategory === 'inwestycje' && <Inwestycje />}
        {currentCategory === 'wydatki' && <Wydatki />}
        {currentCategory === 'oszczedzanie' && <Oszczedzanie />}
        {currentCategory === 'kalkulator' && <Kalkulator />}
      </div>
    </div>
  );
};

export default App;