import { useRef } from "react";
import { useClickAnimation } from "../../../hooks/useClickAnimation";

const Play = ({ text, onClick, disabled }) => {
  const playRef = useRef();
  useClickAnimation(playRef, {});

  return (
    <button
      ref={playRef}
      className="third-step col-span-4 row-span-2 flex items-center justify-center bg-primary transition-all duration-300 ease-in-out"
      onClick={() => {
        setTimeout(() => {
          onClick();
        }, 200);
      }}
      disabled={disabled}
    >
      <span className="text-[6vh] font-bold uppercase text-primary-text transition-all duration-300 ease-in-out">
        {text}
      </span>
    </button>
  );
};
export default Play;
