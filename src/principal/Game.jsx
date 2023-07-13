import { useState } from "react";
import Balls from "./components/balls/Balls";
import Button from "./components/button/Button";
import Grid from "./components/grid/Grid";
import Modal from "./components/modal/Modal";
import Out from "./components/outs/Out";
import Play from "./components/play/Play";
import Team from "./components/teams/Team";
import { useDispatch, useSelector } from "react-redux";
import { useAudio } from "../context/audio.context";
import { gameSlice } from "../redux/reducers/gameSlice";
import Strike from "./components/strikes/Strike";
import useCheckOuts from "../hooks/useCheckOuts";
import useCheckStrikes from "../hooks/useCheckStrikes";
import Bases from "./components/bases/Bases";

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rhe = ["r", "h", "e"];
const emptyRHE = ["", "", ""];

function Game({ handlePlayersView }) {
  const initedGame = useSelector((state) => state.game.inited);
  const careers = useSelector((state) => state.game.careers);
  const visitors = useSelector((state) => state.visitors);
  const locals = useSelector((state) => state.locals);

  const dispatch = useDispatch();
  const { playSound } = useAudio();
  const [showJugadas, setShowJugadas] = useState(false);

  const pressPlayButton = () => {
    if (initedGame) {
      playSound("hit");
      setShowJugadas(true);
    } else {
      dispatch(gameSlice.actions.initGame());
      playSound("hit");
    }
  };

  const closeAction = () => {
    setShowJugadas(false);
  };

  useCheckOuts();
  useCheckStrikes();

  return (
    <>
      <div className="container-grid grid-fullscreen m-1 grid gap-1">
        <div className="col-span-6 row-span-4 bg-orange-300">
          <img
            src="/img/logo_app_bs.png"
            className="w-full h-full object-contain"
            alt="logo"
          />
        </div>
        <Out text="Out" />

        <Button img="settings.svg"></Button>

        <Play
          text={initedGame ? "JUGADA" : "JUGAR"}
          onClick={pressPlayButton}
        />

        <Strike text="strikes" />
        <Button img="back.svg"></Button>
        <Balls />

        {showJugadas ? <Modal onClose={closeAction} /> : null}
        {showJugadas ? null : <Grid values={values} rhe={rhe} />}

        <Team
          name={visitors.team_name}
          onClick={() => handlePlayersView(visitors.team_name, "visitors")}
          disabled={initedGame}
        />

        {showJugadas ? null : (
          <Grid
            values={careers.map(({ visitors }) => visitors)}
            rhe={emptyRHE}
          />
        )}

        <Team
          name={locals.team_name}
          onClick={() => handlePlayersView(locals.team_name, "locals")}
          disabled={initedGame}
        />

        {showJugadas ? null : (
          <Grid values={careers.map(({ locals }) => locals)} rhe={emptyRHE} />
        )}
        <Bases />
        <div className="col-span-12 row-span-3 bg-orange-500"></div>
      </div>
    </>
  );
}
export default Game;
