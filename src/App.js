import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import AboutSearch from "./AboutSearch.js";
import AboutCategory from "./AboutCategory.js";
import AboutUI from "./AboutUI.js";
import RightNavBar from "./RightNavBar.js";
import Footer from "./Footer.js";

function App() {
  let teamView = false;

  const toggleTeamView = () => (teamView = !teamView);

  return (
    <div className="App">
      <Header toggleTeamView={toggleTeamView} />
      <main>
        <div class="main">
          <Home />
          <AboutSearch />
          <AboutCategory />
          <AboutUI />
          <RightNavBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
