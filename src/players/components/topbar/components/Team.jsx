const TeamName = ({ name, handleTeam }) => {
  return (
    <div className="col-span-4 flex items-center">
      <input
        type="text"
        className="pl-2 font-chalk text-[5vh] uppercase text-white bg-transparent outline-none"
        value={name}
        onChange={(e) => {
          handleTeam(e.target.value);
        }}
      />
    </div>
  );
};
export default TeamName;
