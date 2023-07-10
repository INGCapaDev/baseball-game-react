import { useState } from "react";
import Game from "./principal/Game";
import Players from "./players/Players";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import AudioContextProvider from "./context/audio.context";

const App = () => {
  const [players, setPlayers] = useState(false);
  const [team, setTeam] = useState("team");

  const handlePlayersView = (teamname) => {
    setPlayers(true);
    setTeam(teamname);
  };

  return (
    <Provider store={store}>
      <AudioContextProvider>
        {players ? (
          <Players teamname={team} closeView={() => setPlayers(false)} />
        ) : (
          <Game handlePlayersView={handlePlayersView} />
        )}
      </AudioContextProvider>
    </Provider>
  );
};
export default App;
