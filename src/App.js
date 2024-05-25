import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";
import WaveFooter from "./components/WaveFooter";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Technologies />
      <Contact />
      <SocialLinks/>
      <WaveFooter />
    </div>
  );
}

export default App;
