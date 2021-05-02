import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Current from "./pages/Current";
import Home from "./pages/Home";
import About from "./pages/About";
import Effort from "./pages/Effort";
import Header from "./components/Header/Header";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/effort" exact>
          <Effort />
        </Route>
      </Router>
    </div>
  );
}

export default App;
