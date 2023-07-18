const Pitcher = ({ name, index, isDisable, handleNamePitcher }) => {
  return (
    <div className="col-span-3 flex items-center justify-center bg-stone-800">
      <input
        type="text"
        disabled={isDisable}
        className="pl-2 font-chalk text-[5vh]  uppercase text-white bg-transparent border-none outline-none w-full h-full text-center"
        value={name}
        onChange={(e) => handleNamePitcher(e.target.value, index)}
      />
    </div>
  );
};
export default Pitcher;
