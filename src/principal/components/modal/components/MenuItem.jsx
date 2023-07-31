const MenuItem = (props) => {
  return (
    <button onClick={props?.onClick}>
      <div className="group flex items-baseline justify-start space-x-2 p-1 hover:cursor-pointer">
        <span className="text-[5vh] font-bold leading-[1.125] text-secondary-text transition-colors duration-200 group-hover:text-tertiary">
          +
        </span>
        <span
          className="text-[5vh] font-bold leading-[1.125] text-secondary-text transition-colors duration-200 group-hover:text-tertiary
      "
        >
          {props?.text}
        </span>
      </div>
    </button>
  );
};

export default MenuItem;
