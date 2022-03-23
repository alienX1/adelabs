import './App.css';
import Detail from './components/Detail';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import RoadMapBottom from './components/RoadMapBottom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Detail />
      <Features />
      <RoadMapBottom />
      <Footer />
    </div>
  );
}

export default App;
