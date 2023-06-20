const TeamName = (props) => {
  return (
    <div className="col-span-4 flex items-center">
      <span className="pl-2 font-sans text-[6vh] uppercase text-white ">
        {props.name}
      </span>
    </div>
  );
};
export default TeamName;
