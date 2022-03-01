import "./App.css";
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
    </div>
  );
}

export default App;
