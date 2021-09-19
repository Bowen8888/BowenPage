import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeSection from './MainPageSections/WelcomeSection'
import SkillsSection from './MainPageSections/SkillsSection';
import SideProject from './MainPageSections/SideProject'
import CareerSection from './MainPageSections/CareerSection';

function App() {
  return (
    <div>
      <WelcomeSection/>
      <SkillsSection/>
      <SideProject/>
      <CareerSection/>
    </div>     
  );
}

export default App;
