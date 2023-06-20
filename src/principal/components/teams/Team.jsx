const Team = (props) => {
  return (
    <div className="col-span-6 flex min-w-[auto] items-center bg-black">
      <span className="min-w-max pl-2 text-[6vh] font-bold uppercase text-white">
        {props.name}
      </span>
    </div>
  );
};
export default Team;
