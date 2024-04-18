import About from "./components/about/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Mywork from "./components/myWork/Mywork";
import Skills from "./components/skills/Skills";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <div className="App">
      < Header />
      < Hero />
      < About />
      < Stats />
      < Skills />
      < Mywork />
    </div>
  );
}

export default App;
