import './App.css';

import Header from './components/header/header.component';
import HeroSection from './components/hero-section/hero-section.component';
import MissionSection from './components/mission-section/mission-section.component';
import Directory from './components/directory/directory.component';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MissionSection />
      <Directory />
    </div>
  );
}

export default App;
