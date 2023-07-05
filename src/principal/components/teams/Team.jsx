const Team = (props) => {
  return (
    <>
      <button
        className="col-span-6 flex min-w-[auto] items-center bg-black"
        onClick={props?.onClick}
      >
        <span className="min-w-max pl-2 text-[6vh] font-bold uppercase text-white">
          {props.name}
        </span>
      </button>
    </>
  );
};
export default Team;
