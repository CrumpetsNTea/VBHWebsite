import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Nav";
import Specialties from "./components/Specialties";
import Team from "./components/Team";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navigation />

      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
            <Specialties />
            <Team />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
