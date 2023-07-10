import { useDispatch, useSelector } from "react-redux";
import Field from "../outs/components/Field";
import { useAudio } from "../../../context/audio.context";
import { gameSlice } from "../../../redux/reducers/gameSlice";

const Strike = (props) => {
  const inited = useSelector((state) => state.game.inited);
  const outs = useSelector((state) => state.game.outs);
  const strikes = useSelector((state) => state.game.strikes);

  const dispatch = useDispatch();

  const { playHitAudio } = useAudio();

  const markStrike = (index) => () => {
    if (inited) {
      if (index == strikes) {
        playHitAudio(outs, "strike");
        dispatch(gameSlice.actions.strike());
      }
    }
  };
  return (
    <div className="col-span-6 grid grid-cols-6 bg-black">
      <div className="col-span-3 flex justify-between bg-black">
        <div className="flex min-w-[auto] items-center bg-black">
          <span className="pl-1 text-[6vh] font-bold uppercase text-white">
            {props.text}
          </span>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-1 bg-black">
        <Field
          onClick={markStrike(0)}
          bgColor={strikes > 0 ? "bg-red-500" : "bg-white"}
        ></Field>
        <Field
          onClick={markStrike(1)}
          bgColor={strikes > 1 ? "bg-red-500" : "bg-white"}
        ></Field>
        <Field
          onClick={markStrike(2)}
          bgColor={strikes > 2 ? "bg-red-500" : "bg-white"}
        ></Field>
      </div>
    </div>
  );
};
export default Strike;
