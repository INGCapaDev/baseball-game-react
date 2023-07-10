import { useState } from "react";
import Game from "./principal/Game";
import Players from "./players/Players";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import AudioContextProvider from "./context/audio.context";

const App = () => {
  const [players, setPlayers] = useState(false);
  const [team, setTeam] = useState("team");
  const [teamValue, setTeamValue] = useState("");

  const handlePlayersView = (teamname, team) => {
    setPlayers(true);
    setTeam(teamname);
    setTeamValue(team);
  };

  return (
    <Provider store={store}>
      <AudioContextProvider>
        {players ? (
          <Players
            teamname={team}
            closeView={() => setPlayers(false)}
            team={teamValue}
          />
        ) : (
          <Game handlePlayersView={handlePlayersView} />
        )}
      </AudioContextProvider>
    </Provider>
  );
};
export default App;
