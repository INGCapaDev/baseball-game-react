import { useRef } from "react";
import { useClickAnimation } from "../../../hooks/useClickAnimation";

const Team = (props) => {
  const teamRef = useRef();
  useClickAnimation(teamRef, {});

  return (
    <>
      <button
        ref={teamRef}
        className="col-span-6 flex min-w-[auto] items-center bg-black"
        onClick={props?.onClick}
        disabled={props?.disabled}
      >
        <span className="min-w-max pl-2 text-[6vh] font-bold uppercase text-white">
          {props?.name}
        </span>
      </button>
    </>
  );
};
export default Team;
