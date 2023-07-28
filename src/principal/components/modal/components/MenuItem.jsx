const MenuItem = (props) => {
  return (
    <button onClick={props?.onClick}>
      <div className="group flex items-baseline justify-start space-x-2 hover:cursor-pointer">
        <span className="text-[5vh] font-bold leading-[1.125] text-white group-hover:text-orange-300 transition-colors duration-200">
          +
        </span>
        <span className="text-[5vh] font-bold leading-[1.125] text-white group-hover:text-orange-300 transition-colors duration-200">
          {props?.text}
        </span>
      </div>
    </button>
  );
};

export default MenuItem;
