import { useSelector } from "react-redux";
import Field from "../common/Field";

const Out = (props) => {
  const { outs } = useSelector((state) => state.game);

  return (
    <div className="col-span-6 grid grid-cols-6 bg-primary">
      <div className="col-span-3 flex justify-between bg-primary">
        <div className="flex min-w-[auto] items-center bg-primary">
          <span className="pl-1 text-[6vh] font-bold uppercase text-primary-text">
            {props.text}
          </span>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-1 bg-primary">
        <Field bgColor={outs > 0 ? "bg-tertiary" : "bg-white"}></Field>
        <Field bgColor={outs > 1 ? "bg-tertiary" : "bg-white"}></Field>
        <Field bgColor={outs > 2 ? "bg-tertiary" : "bg-white"}></Field>
      </div>
    </div>
  );
};
export default Out;
