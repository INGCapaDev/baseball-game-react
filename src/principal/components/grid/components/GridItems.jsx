import { classNames } from "../../../../utils/classes";

const GridItems = (props) => {
  return (
    <div
      className={classNames("flex items-center justify-center ", props?.colors)}
    >
      <span className="text-[6vh] font-bold uppercase">{props.value}</span>
    </div>
  );
};
export default GridItems;
