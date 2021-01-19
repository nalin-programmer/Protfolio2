import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Education from "./screens/education/Education";
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
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
