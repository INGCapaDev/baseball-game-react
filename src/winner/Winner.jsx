import { useRef } from "react";
import { useClickAnimation } from "../hooks/useClickAnimation";
import { useSelector } from "react-redux";
import Confetti from "react-confetti";
import { useWindowSize } from "../hooks/useWindowSize";

const Winner = () => {
  const closeRef = useRef();
  useClickAnimation(closeRef, {});

  const visitorsName = useSelector((state) => state.visitors.team_name);
  const localsName = useSelector((state) => state.locals.team_name);
  const careers = useSelector((state) => state.game.careers);
  const visitors = careers.reduce(
    (total, careers) => total + careers.visitors,
    0
  );
  const locals = careers.reduce((total, careers) => total + careers.locals, 0);
  const winner = () => {
    if (visitors > locals) return visitorsName;
    return localsName;
  };

  const windowSize = useWindowSize();

  return (
    <>
      <Confetti width={windowSize.width} height={windowSize.height} />
      <div className="h-screen w-full flex items-center justify-center bg-stone-800 flex-col space-y-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-white font-chalk text-[6vw]">Felicidades</p>
          <p className="text-yellow-300 font-chalk text-[8vw]">{winner()}</p>
          <p className="text-white font-chalk text-[6vw]">{`${visitors} - ${locals}`}</p>
        </div>
        <div>
          <button
            className="bg-yellow-300 py-2 px-6 text-stone-800 font-chalk text-[4vw]"
            ref={closeRef}
            onClick={() => {
              setTimeout(() => {
                window.location.reload();
              }, 200);
            }}
          >
            Juego Nuevo
          </button>
        </div>
      </div>
    </>
  );
};
export default Winner;
