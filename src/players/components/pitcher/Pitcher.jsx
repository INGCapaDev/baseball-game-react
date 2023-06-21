const Pitcher = (props) => {
  return (
    <div className="col-span-3 flex items-center justify-center bg-stone-800">
      <span className="font-chalk text-[5vh] uppercase text-white">
        {props.name}
      </span>
    </div>
  );
};
export default Pitcher;
