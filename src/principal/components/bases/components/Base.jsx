import { classNames } from "../../../../utils/classes";

const Base = ({ base }) => {
  return (
    <div
      className={classNames(
        "h-[40%] w-[40%] border-4 border-white absolute",
        base
      )}
    ></div>
  );
};
export default Base;
