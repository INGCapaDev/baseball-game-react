import { useDispatch, useSelector } from "react-redux";
import Field from "../common/Field";
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
    <div className="col-span-6 grid grid-cols-6 bg-primary">
      <div className="col-span-3 flex justify-between bg-primary">
        <div className="flex min-w-[auto] items-center bg-primary">
          <span className="pl-1 text-[6vh] font-bold uppercase text-primary-text">
            {props.text}
          </span>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-1 bg-primary">
        <Field
          onClick={markStrike(0)}
          bgColor={strikes > 0 ? "bg-tertiary" : "bg-white"}
        ></Field>
        <Field
          onClick={markStrike(1)}
          bgColor={strikes > 1 ? "bg-tertiary" : "bg-white"}
        ></Field>
        <Field
          onClick={markStrike(2)}
          bgColor={strikes > 2 ? "bg-tertiary" : "bg-white"}
        ></Field>
      </div>
    </div>
  );
};
export default Strike;
