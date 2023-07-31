import { useDispatch, useSelector } from "react-redux";

import Field from "../common/Field";
import { useAudio } from "../../../context/audio.context";
import { gameSlice } from "../../../redux/reducers/gameSlice";

const Balls = () => {
  const inited = useSelector((state) => state.game.inited);
  const turn = useSelector((state) => state.game.turn);
  const at_bat = useSelector((state) => state[turn]?.at_bat);
  const outs = useSelector((state) => state.game.outs);
  const balls = useSelector((state) => state.game.balls);

  console.log({ balls });

  const dispatch = useDispatch();

  const { playHitAudio } = useAudio();

  const markBall = (index) => () => {
    if (inited) {
      if (index == balls) {
        playHitAudio(outs, "ball");
        dispatch(gameSlice.actions.ball());
      }
    }
  };

  return (
    <div className="col-span-12 grid grid-cols-12 bg-black">
      <div className="col-span-3 flex justify-between bg-black">
        <div className="flex min-w-[auto] items-center bg-black">
          <span className="pl-1 text-[6vh] font-bold uppercase text-white">
            BOLAS
          </span>
        </div>
      </div>
      <div className="col-span-4 grid grid-cols-4 gap-1 bg-black">
        <Field
          onClick={markBall(0)}
          bgColor={balls > 0 ? "bg-yellow-500" : "bg-white"}
        />
        <Field
          onClick={markBall(1)}
          bgColor={balls > 1 ? "bg-yellow-500" : "bg-white"}
        />
        <Field
          onClick={markBall(2)}
          bgColor={balls > 2 ? "bg-yellow-500" : "bg-white"}
        />
        <Field
          onClick={markBall(3)}
          bgColor={balls > 3 ? "bg-yellow-500" : "bg-white"}
        />
      </div>
      <div className="col-span-5 flex flex-col bg-black">
        <span className="pl-1 text-[3vh] font-bold uppercase text-white">
          AL BAT
        </span>
        <span className="pl-4 text-[4vh] uppercase text-white">
          {at_bat?.batter?.name}
        </span>
      </div>
    </div>
  );
};
export default Balls;
