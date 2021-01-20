import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ContactUs from "./screens/contactUs/ContactUs";
import Education from "./screens/education/Education";
import Experience from "./screens/experience/Experience";
import Footer from "./screens/footer/Footer";
import Header from "./screens/header/Header";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import Projects from "./screens/projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Header />
        </header>
        <main>
          <div id="homescreen">
            <HomeScreen />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="contactus">
            <ContactUs />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
