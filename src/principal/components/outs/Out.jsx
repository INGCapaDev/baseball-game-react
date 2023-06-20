import Field from "./components/Field";

const Out = (props) => {
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
        <Field></Field>
        <Field></Field>
        <Field></Field>
      </div>
    </div>
  );
};
export default Out;
