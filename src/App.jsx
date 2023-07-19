import { useState } from "react";
import Game from "./principal/Game";
import Players from "./players/Players";
import { useSelector } from "react-redux";
import Winner from "./winner/Winner";

const App = () => {
  const [players, setPlayers] = useState(false);
  const [team, setTeam] = useState("team");
  const [teamValue, setTeamValue] = useState("");

  const finished = useSelector((state) => state.game.finished);

  const handlePlayersView = (teamname, team) => {
    setPlayers(true);
    setTeam(teamname);
    setTeamValue(team);
  };

  return (
    <>
      {finished ? (
        <Winner />
      ) : players ? (
        <Players
          teamname={team}
          closeView={() => setPlayers(false)}
          team={teamValue}
        />
      ) : (
        <Game handlePlayersView={handlePlayersView} />
      )}
    </>
  );
};
export default App;
