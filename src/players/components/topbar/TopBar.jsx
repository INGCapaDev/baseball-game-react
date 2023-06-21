import Heading from "./components/Heading";
import Team from "./components/Team";

const TopBar = (props) => {
  return (
    <div className="col-span-full grid grid-cols-12 bg-stone-800">
      <div className="col-span-3 flex items-center">
        <span className="pl-2 font-chalk text-[5vh] tracking-widest text-yellow-300">
          Team name:
        </span>
      </div>
      <Team name={props.team}></Team>
      <div className="col-span-1 flex  items-center justify-center overflow-hidden">
        <img src="img/rounded-x.svg" alt="" className="h-[90%]" />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <Heading text="ptc"></Heading>
      </div>
      <div className="col-span-3 flex items-center justify-center">
        <Heading text="pitchers"></Heading>
      </div>
    </div>
  );
};
export default TopBar;
