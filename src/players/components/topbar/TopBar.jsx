import { useRef } from "react";
import Heading from "./components/Heading";
import Team from "./components/Team";
import { useClickAnimation } from "../../../hooks/useClickAnimation";

const TopBar = (props) => {
  const closeRef = useRef();
  useClickAnimation(closeRef, {});
  return (
    <div className="col-span-full grid grid-cols-12 bg-stone-800">
      <div className="col-span-3 flex items-center">
        <span className="pl-2 font-chalk text-[5vh] tracking-widest text-yellow-300">
          Team name:
        </span>
      </div>
      <Team name={props.team}></Team>
      <div className="col-span-1 flex items-center justify-center overflow-hidden">
        <button
          className="overflow-hidden h-full rounded-full"
          ref={closeRef}
          onClick={() => {
            setTimeout(() => {
              props?.closeView();
            }, 200);
          }}
        >
          <img src="img/rounded-x.svg" alt="" className="h-[90%]" />
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <Heading text="ptc"></Heading>
      </div>
      <div className="col-span-3 flex items-center justify-center">
        <Heading text="pitchers"></Heading>
      </div>
    </div>
  );
};
export default TopBar;
