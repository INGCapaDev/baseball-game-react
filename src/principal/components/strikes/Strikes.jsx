import { useDispatch, useSelector } from "react-redux";
import { gameSlice } from "../../../redux/reducers/gameSlice";
import { useAudio } from "../../../context/audio.context";
import Field from "../common/Field";

const Strikes = () => {
  const dispatch = useDispatch();
  const strikes = useSelector((state) => state.game.strikes);
  const outs = useSelector((state) => state.game.outs);

  const { playHitAudio } = useAudio();

  const markStrike = (index) => () => {
    if (index == strikes) {
      playHitAudio(outs, "strike");
      dispatch(gameSlice.actions.strike());
    }
  };

  return (
    <div className="col-span-6 grid grid-cols-6 bg-black">
      <div className="col-span-3 flex justify-between bg-black">
        <div className="flex min-w-[auto] items-center bg-black">
          <span className="pl-1 text-[6vh] font-bold uppercase text-white">
            Strikes
          </span>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-1 bg-black">
        <Field
          onClick={markStrike(0)}
          bgColor={strikes >= 1 ? "bg-yellow-500" : "bg-white"}
        />
        <Field
          onClick={markStrike(1)}
          bgColor={strikes >= 2 ? "bg-yellow-500" : "bg-white"}
        />
        <Field
          onClick={markStrike(2)}
          bgColor={strikes >= 3 ? "bg-yellow-500" : "bg-white"}
        />
      </div>
    </div>
  );
};
export default Strikes;
