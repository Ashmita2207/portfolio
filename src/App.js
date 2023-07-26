import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Footer } from './components/Footer';
import Contact from './components/Contact';
// import { ProjectCards } from './components/ProjectCards';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skills/>
     <Projects/>
     {/* <ProjectCards/> */}
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
