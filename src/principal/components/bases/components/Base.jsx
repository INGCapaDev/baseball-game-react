import { classNames } from "../../../../utils/classes";

const Base = ({ base }) => {
  return (
    <div
      className={classNames(
        "h-[40%] w-[40%] border-4 border-white absolute transition-colors duration-200",
        base
      )}
    ></div>
  );
};
export default Base;
