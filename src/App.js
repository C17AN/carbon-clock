import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
