import Field from "../outs/components/Field";

const Balls = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 bg-black">
      <div className="col-span-3 flex justify-between bg-black">
        <div className="flex min-w-[auto] items-center bg-black">
          <span className="pl-1 text-[6vh] font-bold uppercase text-white">
            Balls
          </span>
        </div>
      </div>
      <div className="col-span-4 grid grid-cols-4 gap-1 bg-black">
        <Field></Field>
        <Field></Field>
        <Field></Field>
        <Field></Field>
      </div>
      <div className="col-span-5 bg-black">
        <span className="pl-1 text-[3vh] font-bold uppercase text-white">
          AT BAT
        </span>
      </div>
    </div>
  );
};
export default Balls;
