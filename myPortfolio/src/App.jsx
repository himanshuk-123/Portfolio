import "tailwindcss";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/project";
import Contact from "./Components/Contact";
import Education from "./Components/Education";

function App() {

  return (
    <>
    <div id="home">
    <Navbar/>
    </div>
    <div id="about">
    <Profile/>
    </div>
    <div id="education">
      <Education/>
    </div>
    <div id="skills">
      <Skills/>
    </div>
    <div id="projects">
      <Projects/>
    </div>
    <div id="contact">
      <Contact/>
    </div>
     
    </>
  )
}

export default App
