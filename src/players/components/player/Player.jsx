import Entry from "./components/Entry";
import Text from "./components/Text";

const Player = (props) => {
  return (
    <>
      <div className="relative col-span-3 flex items-center bg-stone-800">
        <span className="absolute right-1 top-1 text-[3vh] font-bold uppercase text-white">
          {props.position}
        </span>
        <span className="pl-2 font-sans text-[5vh]  uppercase text-white">
          {props.name}
        </span>
      </div>
      <div className="scores-grid col-span-5 grid  gap-1 bg-white">
        <Entry score="0-1" game="out"></Entry>
        <Entry score="0-2" game="ponche"></Entry>
        <Entry score="1-3" game="sencillo"></Entry>
        <Entry score="2-4" game="sencillo"></Entry>
        <Entry score="3-5" game="doble"></Entry>
      </div>
      <div className="flex items-center justify-center bg-stone-800">
        <Text text={props.ptc}></Text>
      </div>
    </>
  );
};
export default Player;
