import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";

function App() {
  let teamView = false;

  const toggleTeamView = () => (teamView = !teamView);

  return (
    <div className="App">
      <Header toggleTeamView={toggleTeamView} />
      <main>
        <div class="main">
          <Home />
        </div>
      </main>
    </div>
  );
}

export default App;
