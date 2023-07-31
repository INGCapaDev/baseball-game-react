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
  const hits = useSelector((state) => state.game.hits);

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

  return (
    <div className="col-span-12  grid grid-cols-12  bg-black">
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
      <div className="col-span-5 overflow-hidden bg-black">
        <div className="h-full w-full overflow-hidden">
          <div
            className="w-full overflow-x-scroll whitespace-nowrap pl-1 text-[3vh] font-bold uppercase text-white"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            AL BAT
            {hits ? (
              <>
                <span>
                  {" / "}
                  {hits[at_bat?.index][turn]} - {at_bat?.batter?.times}
                </span>
                <span>
                  {" / "}
                  {hits
                    ? calculatePtc(
                        hits,
                        at_bat?.index,
                        turn,
                        at_bat?.batter?.times
                      )
                    : 0}
                </span>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="w-full overflow-x-scroll whitespace-nowrap pl-4 text-[4vh] uppercase text-white"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {at_bat?.batter?.name}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Balls;
