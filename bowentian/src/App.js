import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeSection from './MainPageSections/WelcomeSection'
import SideProject from './MainPageSections/SideProject'

function App() {
  return (
    <div>
      <WelcomeSection/>
      <SideProject/>
    </div>     
  );
}

export default App;
