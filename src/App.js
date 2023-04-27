import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Abilites from './sections/Abilities';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <About/>
      <Abilites/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
