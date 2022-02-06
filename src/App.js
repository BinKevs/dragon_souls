import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Landing />
      <div id="ParticleCanvas"></div>
      <About />
      <Roadmap />
      <Tokenomics />
      <FAQ />
    </>
  );
}

export default App;
