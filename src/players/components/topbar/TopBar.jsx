import { useRef } from "react";
import Heading from "./components/Heading";
import Team from "./components/Team";
import { useClickAnimation } from "../../../hooks/useClickAnimation";
import { useDispatch } from "react-redux";
import { localsSlice } from "../../../redux/reducers/localsSlice";
import { visitorsSlice } from "../../../redux/reducers/visitorsSlice";
import { useState } from "react";

const TopBar = (props) => {
  const [team, setTeam] = useState(props?.team);
  const dispatch = useDispatch();
  const closeRef = useRef();
  useClickAnimation(closeRef, {});
  return (
    <div className="col-span-full grid grid-cols-12 bg-stone-800">
      <div className="col-span-3 flex items-center">
        <span className="pl-2 font-chalk text-[5vh] tracking-widest text-yellow-300">
          Team name:
        </span>
      </div>
      <Team name={team} handleTeam={(value) => setTeam(value)}></Team>
      <div className="col-span-1 flex items-center justify-center overflow-hidden">
        <button
          className="overflow-hidden h-full rounded-full"
          ref={closeRef}
          onClick={() => {
            setTimeout(() => {
              props?.closeView();
            }, 200);

            if (props?.teamvalue == "locals") {
              dispatch(localsSlice.actions.changeTeamName(team));
              dispatch(localsSlice.actions.changeBatters(props?.players));
            }
            if (props?.teamvalue == "visitors") {
              dispatch(visitorsSlice.actions.changeTeamName(team));
              dispatch(visitorsSlice.actions.changeBatters(props?.players));
            }
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
