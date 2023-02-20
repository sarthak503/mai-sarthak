import './App.css';
import Header from './component/header/Header';
import About from '../src/component/about/index'
import Project from '../src/component/projects/index'
import Contact from '../src/component/contact/index'
import Footer from '../src/component/footer/index'

import "bootstrap/dist/css/bootstrap.min.css";
import Skills from './component/skills';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
