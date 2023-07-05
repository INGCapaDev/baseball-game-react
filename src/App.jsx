import { useState } from "react";
import Game from "./principal/Game";
import Players from "./players/Players";

const App = () => {
  const [players, setPlayer] = useState(false);
  const [team, setTeam] = useState("team");

  const handlePlayersView = (teamname) => {
    setPlayer(true);
    setTeam(teamname);
  };

  return (
    <>
      {players ? (
        <Players teamname={team} closeView={() => setPlayer(false)} />
      ) : (
        <Game handlePlayersView={handlePlayersView} />
      )}
    </>
  );
};
export default App;
