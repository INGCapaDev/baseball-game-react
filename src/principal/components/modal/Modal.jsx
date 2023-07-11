import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./components/MenuItem";
import { useAudio } from "../../../context/audio.context";
import { gameSlice } from "../../../redux/reducers/gameSlice";

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
    playSound("hit");
    makePlay(
      gameSlice.actions.homeRun({
        turn,
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
    makePlay(
      gameSlice.actions.basePerBall({
        at_bat,
        turn,
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
    <div className="relative col-span-12 row-span-3 flex items-center bg-black">
      <button
        className="absolute right-1 top-1 hover:animate-pulse hover:cursor-pointer"
        onClick={onClose}
      >
        <img className="h-6 w-6" src="./img/close.svg" alt="" />
      </button>
      <div className="ml-5 flex flex-col">
        <MenuItem text="sencillo" onClick={simple}></MenuItem>
        <MenuItem text="doble" onClick={double}></MenuItem>
        <MenuItem text="triple" onClick={triple}></MenuItem>
        <MenuItem text="home run" onClick={homerun}></MenuItem>
      </div>
      <div className="ml-5 flex flex-col">
        <MenuItem text="out" onClick={out}></MenuItem>
        <MenuItem text="base por bola" onClick={base}></MenuItem>
        <MenuItem text="corredor eliminado"></MenuItem>
        <MenuItem text="en 1a 2a 3a"></MenuItem>
      </div>
    </div>
  );
};
export default Modal;
