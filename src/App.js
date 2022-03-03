import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Specialties from "./components/Specialties";
import Team from "./components/Team";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <LandingPage />
            <Specialties />
            <Team />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
