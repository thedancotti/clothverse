import './App.css';

import Header from './components/header/header.component';
import HeroSection from './components/hero-section/hero-section.component';
import MissionSection from './components/mission-section/mission-section.component';
import FeaturedCollections from './components/featured-collections/featured-collections.component';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MissionSection />
      <FeaturedCollections />
    </div>
  );
}

export default App;