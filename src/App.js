import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./screens/header/Header";
import HomeScreen from "./screens/homeScreen/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
          </Switch>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
