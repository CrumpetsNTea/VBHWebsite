import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Specialties from "./components/Specialties";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <Specialties />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
