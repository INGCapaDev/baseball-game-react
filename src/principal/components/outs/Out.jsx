import { useSelector } from "react-redux";
import Field from "../common/Field";

const Out = (props) => {
  const { outs } = useSelector(state => state.game)

  return (
    <div className="col-span-6 grid grid-cols-6 bg-black">
      <div className="col-span-3 flex justify-between bg-black">
        <div className="flex min-w-[auto] items-center bg-black">
          <span className="pl-1 text-[6vh] font-bold uppercase text-white">
            {props.text}
          </span>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-1 bg-black">
        <Field bgColor={outs >= 1 ? "bg-danger-500" : "bg-white"} />
        <Field bgColor={outs >= 2 ? "bg-danger-500" : "bg-white"} />
        <Field bgColor={outs >= 3 ? "bg-danger-500" : "bg-white"} />
      </div>
    </div>
  );
};
export default Out;
