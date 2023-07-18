import { useSelector } from "react-redux";
import Pitcher from "./components/pitcher/Pitcher";
import Player from "./components/player/Player";
import TopBar from "./components/topbar/TopBar";
import { useState } from "react";

const Players = ({ teamname, closeView, team }) => {
  const localPlayers = useSelector((state) => state.locals.batters);
  const visitorsPlayers = useSelector((state) => state.visitors.batters);
  const playersCurrent = team === "locals" ? localPlayers : visitorsPlayers;
  const [players, setPlayers] = useState(playersCurrent);

  const handleName = (name, index) => {
    let newPlayers = [...players];
    newPlayers[index] = { ...newPlayers[index], name: name };
    setPlayers(newPlayers);
  };

  return (
    <>
      <div className="players-grid grid-fullscreen m-1 grid gap-1">
        <TopBar
          team={teamname}
          closeView={closeView}
          teamvalue={team}
          players={players}
        ></TopBar>
        <Player
          index={0}
          name={players[0]?.name}
          position="d"
          ptc=".600"
          handleName={handleName}
        ></Player>
        <Pitcher name="j. blendl"></Pitcher>
        <Player
          index={1}
          name={players[1]?.name}
          position="d"
          ptc=".600"
          handleName={handleName}
        ></Player>
        <Pitcher name="kirem m."></Pitcher>
        <Player
          index={2}
          name={players[2]?.name}
          position="z"
          ptc=".400"
          handleName={handleName}
        ></Player>
        <Pitcher name="r. farias"></Pitcher>
        <Player
          index={3}
          name={players[3]?.name}
          position="d"
          ptc=".600"
          handleName={handleName}
        ></Player>
        <Pitcher name="c.cueva"></Pitcher>
        <Player
          index={4}
          name={players[4]?.name}
          position="d"
          ptc=".400"
          handleName={handleName}
        ></Player>
        <Pitcher name="m. flores"></Pitcher>
        <Player
          index={5}
          name={players[5]?.name}
          position="z"
          ptc=".400"
          handleName={handleName}
        ></Player>
        <Pitcher name=""></Pitcher>
        <Player
          index={6}
          name={players[6]?.name}
          position="d"
          ptc=".200"
          handleName={handleName}
        ></Player>
        <Pitcher name=""></Pitcher>
        <Player
          index={7}
          name={players[7]?.name}
          position="d"
          ptc=".200"
          handleName={handleName}
        ></Player>
        <Pitcher name=""></Pitcher>
        <Player
          index={8}
          name={players[8]?.name}
          position="z"
          ptc=".750"
          handleName={handleName}
        ></Player>
        <Pitcher name=""></Pitcher>
      </div>
    </>
  );
};
export default Players;
