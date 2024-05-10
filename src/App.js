import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Mywork from "./components/myWork/Mywork";
import Skills from "./components/skills/Skills";
import Stats from "./components/stats/Stats";

import index from "./components/i18n/index.js";
import { useTranslation } from "react-i18next";

function App() {

const {t} = useTranslation();

  return (
    <div className="App">
      < Header />
      < Hero />
      < About />
      < Stats />
      < Skills />
      < Mywork />
      < Experience />
    </div>
  );
}

export default App;
