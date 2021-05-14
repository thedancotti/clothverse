import './App.css';

import Announcement from './components/announcement/announcement.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import HeroSection from './components/hero-section/hero-section.component';

function App() {
  return (
    <div className="App">
      <Announcement />
      <NavigationBar />
      <HeroSection />
    </div>
  );
}

export default App;
