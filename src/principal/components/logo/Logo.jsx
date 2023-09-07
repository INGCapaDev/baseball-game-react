import Clock from "react-live-clock";

const Logo = () => {
  return (
    <div className="relative col-span-6 row-span-4 bg-secondary">
      <Clock
        format={"HH:mm:ss"}
        ticking={true}
        className="absolute left-2 top-0 text-[3.5vh] font-bold text-primary-text"
      ></Clock>
      <img
        src="/img/logo-diablos.jpeg"
        className="h-full w-full bg-contain"
        alt="logo"
      />
      <Clock
        format={"DD-MM-YY"}
        ticking={true}
        className="absolute right-2 top-0 z-10 text-[3.5vh] font-bold text-primary-text"
      ></Clock>
    </div>
  );
};
export default Logo;
