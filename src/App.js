import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ContactUs from "./screens/contactUs/ContactUs";
import Education from "./screens/education/Education";
import Experience from "./screens/experience/Experience";
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
          {/* <Switch>
            <Route path="/" component={HomeScreen} exact />
          </Switch> */}
          <HomeScreen />
          <Projects />
          <Education />
          <Experience />
          <ContactUs />
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
