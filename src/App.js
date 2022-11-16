import "./App.css";
import Header from "./Header.js";

function App() {
  let teamView = false;

  const toggleTeamView = () => (teamView = !teamView);

  return (
    <div className="App">
      <Header toggleTeamView={toggleTeamView} />
    </div>
  );
}

export default App;
