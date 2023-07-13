import { useSelector } from "react-redux";
import Base from "./components/Base";

const Bases = () => {
  const bases = useSelector((state) => state.game.bases);
  return (
    <div className="col-span-6 row-span-3 bg-black p-4">
      <div className="flex w-full h-full items-center justify-center">
        <div className="h-[20vh] w-[20vh] rotate-45 relative border-4 border-white">
          <div id="second" className=" border-l-0 border-t-0 "></div>
          <Base
            base={
              bases[1]
                ? "border-l-0 border-t-0 bg-orange-500"
                : "border-l-0 border-t-0"
            }
          />
          <Base
            base={
              bases[0]
                ? "right-0 border-r-0 border-t-0 bg-orange-500"
                : "right-0 border-r-0 border-t-0"
            }
          />
          <Base
            base={
              bases[2]
                ? "bottom-0 border-l-0 border-b-0 bg-orange-500"
                : "bottom-0 border-l-0 border-b-0"
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Bases;
