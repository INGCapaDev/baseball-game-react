import { useState } from "react";
import Balls from "./components/balls/Balls";
// import Button from "./components/button/Button";
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
import useCheckBalls from "../hooks/useCheckBalls";
import GridEntraces from "./components/grid/GridEntraces";
import { useEntry } from "../hooks/useEntry";
import { useTour } from "@reactour/tour";
import { useEffect } from "react";
import useCheckDraw from "../hooks/useCheckDraw";
import ShowModal from "../ShowModal";
import Clock from "react-live-clock";

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rhe = ["c", "h", "e"];

function Game({ handlePlayersView }) {
  const initedGame = useSelector((state) => state.game.inited);
  const careers = useSelector((state) => state.game.careers);
  const visitors = useSelector((state) => state.visitors);
  const locals = useSelector((state) => state.locals);
  const turn = useSelector((state) => state.game.turn);
  const rheValues = useSelector((state) => state.game.rhe);

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

  const { setIsOpen, setCurrentStep } = useTour();

  useEffect(() => {
    setIsOpen(!initedGame);
  }, [initedGame, setIsOpen]);

  useCheckOuts();
  useCheckStrikes();
  useCheckBalls();
  useEntry();
  useCheckDraw();

  return (
    <>
      <div className="container-grid grid-fullscreen m-1 grid gap-1">
        <div className="relative col-span-6 row-span-4 bg-secondary">
          <Clock
            format={"HH:mm:ss"}
            ticking={true}
            className="absolute left-2 top-0 text-[3.5vh] font-bold text-primary-text"
          ></Clock>
          <img
            src="/img/logo-diablos.jpeg"
            className="h-full w-full bg-contain"
            alt="logo"
          />
          <Clock
            format={"DD-MM-YY"}
            ticking={true}
            className="absolute right-2 top-0 z-10 text-[3.5vh] font-bold text-primary-text"
          ></Clock>
        </div>

        <div className="col-span-8 grid grid-cols-8">
          <Out text="Outs" />
          <div className="col-span-2 bg-primary"></div>
        </div>

        {/* <Button img="settings.svg"></Button> */}

        <Play
          text={initedGame ? "JUGADA" : "JUGAR"}
          onClick={pressPlayButton}
        />

        <div className="col-span-8 grid grid-cols-8">
          <Strike text="strikes" />
          <div className="col-span-2 bg-primary"></div>
        </div>

        {/* <Button img="back.svg"></Button> */}
        <Balls />

        {showJugadas ? (
          <ShowModal>
            <Modal onClose={closeAction} />
          </ShowModal>
        ) : null}

        <GridEntraces values={values} rhe={rhe} />

        <Team
          name={visitors.team_name}
          onClick={() => {
            setIsOpen(false);
            setCurrentStep(1);
            handlePlayersView(visitors.team_name, "visitors");
          }}
          disabled={false}
          step="first-step"
          bgColor={
            turn === "visitors" && initedGame ? "bg-tertiary" : "bg-primary"
          }
          textColor={
            turn === "visitors" && initedGame
              ? "text-tertiary-text"
              : "text-primary-text"
          }
        />

        <Grid
          values={careers.map(({ visitors }) => visitors)}
          rhe={initedGame ? rheValues.map(({ visitors }) => visitors) : []}
        />

        <Team
          name={locals.team_name}
          onClick={() => {
            setIsOpen(false);
            setCurrentStep(2);
            handlePlayersView(locals.team_name, "locals");
          }}
          disabled={false}
          step="second-step"
          bgColor={
            turn === "locals" && initedGame ? "bg-tertiary" : "bg-primary"
          }
          textColor={
            turn === "locals" && initedGame
              ? "text-tertiary-text"
              : "text-primary-text"
          }
        />

        <Grid
          isLocal={true}
          values={careers.map(({ locals }) => locals)}
          rhe={initedGame ? rheValues.map(({ locals }) => locals) : []}
        />

        <Bases />
        <div className="col-span-12 row-span-3 bg-primary">
          <img
            src="/img/banner.png"
            alt="banner"
            className="h-full w-full bg-contain"
          />
        </div>
      </div>
    </>
  );
}
export default Game;
