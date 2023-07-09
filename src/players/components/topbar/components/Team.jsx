const TeamName = (props) => {
  return (
    <div className="col-span-4 flex items-center">
      <input type="text" className="pl-2 font-chalk text-[6vh] uppercase text-white bg-transparent outline-none" defaultValue={props.name}/>
    </div>
  );
};
export default TeamName;
