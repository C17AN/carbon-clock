import { BrowserRouter as Router, Link, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Danger from "./pages/Danger";
import Header from "./components/Header/Header";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/Danger" exact>
              <Danger />
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
