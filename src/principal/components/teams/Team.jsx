import { useRef } from "react";
import { useClickAnimation } from "../../../hooks/useClickAnimation";
import { classNames } from "../../../utils/classes";

const Team = (props) => {
  const teamRef = useRef();
  useClickAnimation(teamRef, {});

  return (
    <>
      <button
        ref={teamRef}
        className={classNames(
          "col-span-6 flex min-w-[auto] items-center transition-colors duration-200",
          props?.bgColor,
          props?.textColor
        )}
        onClick={() => {
          setTimeout(() => {
            props?.onClick();
          }, 200);
        }}
        disabled={props?.disabled}
      >
        <span className="min-w-max pl-2 text-[6vh] font-bold uppercase">
          {props?.name}
        </span>
      </button>
    </>
  );
};
export default Team;
