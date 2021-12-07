import React from 'react';
import './App.css';
import WelcomeSection from './MainPageSections/WelcomeSection'
import SkillsSection from './MainPageSections/SkillsSection';
import SideProject from './MainPageSections/SideProject'
import CareerSection from './MainPageSections/CareerSection';
import ContactSection from "./MainPageSections/ContactSection";

function App() {
  return (
    <div id="app">
      <WelcomeSection/>
      <SkillsSection/>
      <SideProject/>
      <CareerSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
