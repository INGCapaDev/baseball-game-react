import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./components/MenuItem";
import { useAudio } from "../../../context/audio.context";
import { gameSlice } from "../../../redux/reducers/gameSlice";
import MenuItemBase from "./components/MenuItemBase";

const Modal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { turn } = useSelector((state) => state.game);
  const { playSound, resetHitAudio } = useAudio();

  const at_bat = useSelector((state) => state[turn]?.at_bat);

  const simple = () => {
    playSound("hit");
    makePlay(
      gameSlice.actions.simple({
        at_bat,
        turn,
      })
    );
  };

  const double = () => {
    playSound("hit");
    makePlay(
      gameSlice.actions.double({
        at_bat,
        turn,
      })
    );
  };

  const triple = () => {
    playSound("hit");
    makePlay(
      gameSlice.actions.triple({
        at_bat,
        turn,
      })
    );
  };

  const homerun = () => {
    playSound("homerun");
    makePlay(
      gameSlice.actions.homeRun({
        turn,
        at_bat,
      })
    );
  };

  const out = () => {
    playSound("out");
    makePlay(
      gameSlice.actions.out({
        turn,
      })
    );
  };

  // eslint-disable-next-line no-unused-vars
  const deleteAll = () => {
    makePlay(
      gameSlice.actions.deleteAll({
        turn,
      })
    );
  };

  const base = () => {
    playSound("hit");
    makePlay(
      gameSlice.actions.basePerBall({
        at_bat,
        turn,
      })
    );
  };

  const error = () => {
    playSound("hit");
    makePlay(gameSlice.actions.error({ turn }));
  };

  const eliminatePlayer = (base) => {
    playSound("hit");
    makePlay(
      gameSlice.actions.eliminatePlayer({
        turn,
        base,
      })
    );
  };

  const movePlayer = (base) => {
    playSound("hit");
    makePlay(
      gameSlice.actions.movePlayer({
        turn,
        base,
      })
    );
  };

  const makePlay = (play) => {
    resetHitAudio();
    dispatch(play);
    onClose();
    return play;
  };

  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-secondary bg-opacity-50">
      <div className="relative flex items-center bg-secondary p-2 shadow-modal">
        <button
          className="absolute right-1 top-1 hover:animate-pulse hover:cursor-pointer"
          onClick={onClose}
        >
          <img className="h-6 w-6" src="./img/close.svg" alt="" />
        </button>
        <div className="items ml-5 flex h-full flex-col justify-evenly">
          <MenuItem text="sencillo" onClick={simple}></MenuItem>
          <MenuItem text="doble" onClick={double}></MenuItem>
          <MenuItem text="triple" onClick={triple}></MenuItem>
          <MenuItem text="home run" onClick={homerun}></MenuItem>
          <MenuItemBase
            options={["1ra", "2da", "3ra"]}
            text="avanzar corredor"
            onClick={movePlayer}
          />
        </div>
        <div className="mx-5 flex h-full flex-col justify-evenly">
          <MenuItem text="error" onClick={error}></MenuItem>
          <MenuItem text="out" onClick={out}></MenuItem>
          <MenuItem text="bolazo al bateador" onClick={base}></MenuItem>
          <MenuItemBase
            options={["1ra", "2da", "3ra"]}
            text="corredor eliminado"
            onClick={eliminatePlayer}
          />
        </div>
      </div>
    </div>
  );
};
export default Modal;
