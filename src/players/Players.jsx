import { useSelector } from "react-redux";
// import Pitcher from "./components/pitcher/Pitcher";
import Player from "./components/player/Player";
import TopBar from "./components/topbar/TopBar";
import { useState } from "react";

const Players = ({ teamname, closeView, team }) => {
  const localPlayers = useSelector((state) => state.locals.batters);
  const visitorsPlayers = useSelector((state) => state.visitors.batters);
  const initedGame = useSelector((state) => state.game.inited);
  const playersCurrent = team === "locals" ? localPlayers : visitorsPlayers;
  const [players, setPlayers] = useState(playersCurrent);

  // const localPitchers = useSelector((state) => state.locals.pitchers);
  // const visitorsPitchers = useSelector((state) => state.visitors.pitchers);
  // const pitchersCurrent = team === "locals" ? localPitchers : visitorsPitchers;
  // const [pitchers, setPitchers] = useState(pitchersCurrent);

  const handleNamePlayer = (name, index) => {
    let newPlayers = [...players];
    newPlayers[index] = { ...newPlayers[index], name: name };
    setPlayers(newPlayers);
  };

  // const handleNamePitcher = (name, index) => {
  //   let newPitchers = [...pitchers];
  //   newPitchers[index] = { ...newPitchers[index], name: name };
  //   setPitchers(newPitchers);
  // };

  const calculatePtc = (hits, index, team, times) => {
    if (times == 0 || hits[index][team] == 0) {
      return 0;
    }
    const ptc = hits[index][team] / times;

    if (ptc == 1) {
      return 1;
    }

    return `.${ptc.toFixed(3).substring(2)}`;
  };

  const hits = useSelector((state) => state.game.hits);

  return (
    <div className="players-grid grid-fullscreen m-1 grid gap-1">
      <TopBar
        team={teamname}
        closeView={closeView}
        teamvalue={team}
        players={players}
        // pitchers={pitchers}
        isDisable={initedGame}
      />
      {players.map((player, index) => (
        <>
          <Player
            key={players[index]?.id}
            index={index}
            name={player?.name}
            entries={player?.entries}
            position={index % 2 === 0 ? "d" : "z"}
            ptc={hits ? calculatePtc(hits, index, team, player.times) : 0}
            handleNamePlayer={handleNamePlayer}
            isDisable={initedGame}
          />
          {/* {index <= 4 ? (
            <Pitcher
              key={pitchers[index]?.id}
              index={index}
              name={pitchers[index]?.name}
              handleNamePitcher={handleNamePitcher}
              isDisable={initedGame}
            />
          ) : (
            <Pitcher
              key={`pitcher-${index}`}
              index={index}
              name=""
              isDisable={true}
            />
          )} */}
        </>
      ))}
    </div>
  );
};
export default Players;
