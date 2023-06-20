const MenuItem = (props) => {
  return (
    <div>
      <div className="group flex items-baseline justify-start space-x-2 hover:cursor-pointer">
        <span className="text-[6vh] font-bold leading-[1.125] text-white group-hover:text-orange-300">
          +
        </span>
        <span className="text-[6vh] font-bold leading-[1.125] text-white group-hover:text-orange-300">
          {props.text}
        </span>
      </div>
    </div>
  );
};
export default MenuItem;
