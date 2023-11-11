import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Message from "./components/Message";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Message></Message>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Hireme></Hireme>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
