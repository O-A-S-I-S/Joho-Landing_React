import "./App.css";
import { useState } from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import AboutSearch from "./AboutSearch.js";
import AboutCategory from "./AboutCategory.js";
import AboutUI from "./AboutUI.js";
import RightNavBar from "./RightNavBar.js";
import Footer from "./Footer.js";
import { Team } from "./Team.js";
import { Testimonials } from "./Testimonials";

function App() {
  const [teamView, setTeamView] = useState(false);
  function teamViewFalse() {
    setTeamView(false);
  }
  function toggleTeamView() {
    setTeamView(!teamView);
  }
  return (
    <div className="App">
      <Header
        teamViewFalse={teamViewFalse}
        toggleTeamView={() => toggleTeamView()}
      />
      <main>
        {!teamView ? (
          <div class="main">
            <Home />
            <AboutSearch />
            <AboutCategory />
            <AboutUI />
            <Testimonials />
            <RightNavBar />
          </div>
        ) : (
          <Team />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
