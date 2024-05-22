import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Mywork from "./components/myWork/Mywork";
import Skills from "./components/skills/Skills";
import Stats from "./components/stats/Stats";

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          < Header />
          < Hero />
          < About />
          < Stats />
          < Skills />
          < Mywork />
          < Experience />
        </I18nextProvider>
      </Provider>
    </div>
  );
}

export default App;
