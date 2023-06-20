import Heading from "./components/Heading";
import Team from "./components/Team";

const TopBar = (props) => {
  return (
    <div className="col-span-full grid grid-cols-12 bg-stone-800">
      <div className="col-span-3 flex items-center">
        <span className="pl-2 font-sans text-[5vh] tracking-widest text-yellow-300">
          Team Name:
        </span>
      </div>
      <Team name={props.team}></Team>
      <div className="col-span-1 flex  items-center justify-center overflow-hidden">
        <img src="img/rounded-x.svg" alt="" className="h-[90%]" />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <span className="font-sans text-[5vh] uppercase  text-yellow-300">
          <Heading text="ptc"></Heading>
        </span>
      </div>
      <div className="col-span-3 flex items-center justify-center">
        <Heading text="pitchers"></Heading>
      </div>
    </div>
  );
};
export default TopBar;
