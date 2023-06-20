import MenuItem from "./components/MenuItem";

const Modal = () => {
  return (
    <div className="relative col-span-12 row-span-3 flex items-center bg-black">
      <span className="absolute right-1 top-1 hover:animate-pulse hover:cursor-pointer">
        <img className="h-6 w-6" src="./img/close.svg" alt="" />
      </span>
      <div className="ml-5 flex flex-col">
        <MenuItem text="sencillo"></MenuItem>
        <MenuItem text="doble"></MenuItem>
        <MenuItem text="triple"></MenuItem>
        <MenuItem text="home run"></MenuItem>
      </div>
      <div className="ml-5 flex flex-col">
        <MenuItem text="out"></MenuItem>
        <MenuItem text="base por bola"></MenuItem>
        <MenuItem text="corredor eliminado"></MenuItem>
        <MenuItem text="en 1a 2a 3a"></MenuItem>
      </div>
    </div>
  );
};
export default Modal;
