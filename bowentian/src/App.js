import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeSection from './MainPageSections/WelcomeSection'
import SideProject from './MainPageSections/SideProject'
import CareerSection from './MainPageSections/CareerSection';

function App() {
  return (
    <div>
      <WelcomeSection/>
      <CareerSection/>
      <SideProject/>
    </div>     
  );
}

export default App;
