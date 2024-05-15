import { useClock } from "../../../hooks/useClock";

const Logo = () => {
  const { time, date } = useClock();
  return (
    <div className="relative col-span-6 row-span-4 bg-secondary">
      <span className="absolute left-2 top-0 z-10 text-[3.5vh] font-bold text-primary-text">
        {time}
      </span>
      <img
        src="/img/logo-JB-cel-1.png"
        className="h-full w-full bg-contain"
        alt="logo"
      />
      <span className="absolute right-2 top-0 z-10 text-[3.5vh] font-bold text-primary-text">
        {date}
      </span>
    </div>
  );
};
export default Logo;
