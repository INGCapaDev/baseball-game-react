import { useSelector } from "react-redux";
import Base from "./components/Base";

const Bases = () => {
  const bases = useSelector((state) => state.game.bases);
  return (
    <div className="col-span-6 row-span-3 bg-primary p-4">
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative h-[20vh] w-[20vh] rotate-45 border-4 border-primary-text">
          <div id="second" className=" border-l-0 border-t-0 "></div>
          <Base
            base={
              bases[1]
                ? "border-l-0 border-t-0 bg-tertiary"
                : "border-l-0 border-t-0"
            }
          />
          <Base
            base={
              bases[0]
                ? "right-0 border-r-0 border-t-0 bg-tertiary"
                : "right-0 border-r-0 border-t-0"
            }
          />
          <Base
            base={
              bases[2]
                ? "bottom-0 border-l-0 border-b-0 bg-tertiary"
                : "bottom-0 border-l-0 border-b-0"
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Bases;
