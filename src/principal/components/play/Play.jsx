import { useRef } from "react";
import { useClickAnimation } from "../../../hooks/useClickAnimation";

const Play = ({ text, onClick, disabled }) => {
  const playRef = useRef();
  useClickAnimation(playRef, {});

  return (
    <button
      ref={playRef}
      className="col-span-4 row-span-2 flex items-center justify-center bg-orange-500"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="text-[6vh] font-bold uppercase text-white">{text}</span>
    </button>
  );
};
export default Play;
