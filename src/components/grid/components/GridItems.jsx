const GridItems = (props) => {
  return (
    <div className="flex items-center justify-center bg-black">
      <span className="text-[6vh] font-bold uppercase text-white">
        {props.value}
      </span>
    </div>
  );
};
export default GridItems;
