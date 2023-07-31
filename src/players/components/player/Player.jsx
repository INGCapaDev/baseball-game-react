import Entry from "./components/Entry";
import { useRef } from "react";

const Player = ({
  index,
  handleNamePlayer,
  position,
  name,
  ptc,
  entries,
  isDisable,
}) => {
  const scrollContainerRef = useRef(null);

  const handleEntryScroll = (e) => {
    const { scrollLeft } = e.target;
    const scrollContainers = document.querySelectorAll(
      ".entry-scroll-container"
    );

    scrollContainers.forEach((container) => {
      if (container !== scrollContainerRef.current) {
        container.scrollLeft = scrollLeft;
      }
    });
  };

  return (
    <>
      <div className="relative col-span-3 flex items-center bg-stone-800">
        <span className="absolute right-1 top-1 text-[3vh] font-bold uppercase text-white">
          {position}
        </span>
        <input
          disabled={isDisable}
          type="text"
          className="pl-2 font-chalk text-[5vh] uppercase text-white bg-transparent border-none outline-none w-full h-full"
          value={name}
          onChange={(e) => handleNamePlayer(e.target.value, index)}
        />
      </div>
      <div
        ref={scrollContainerRef}
        onScroll={handleEntryScroll}
        className="scores-grid col-span-8 grid gap-1 bg-white entry-scroll-container"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {entries.map((entry, index) => (
          <Entry key={index} score={entry?.runs} game={entry?.play} />
        ))}
      </div>
      <div className="flex items-center justify-center bg-stone-800 col-span-1">
        <div className="text-center bg-transparent border-none font-chalk text-[5vh] uppercase text-white outline-none w-full h-full">
          {ptc}
        </div>
      </div>
    </>
  );
};

export default Player;
