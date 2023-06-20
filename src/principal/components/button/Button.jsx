const Button = (props) => {
  return (
    <div className="col-span-2 flex items-center justify-center bg-orange-300">
      <img src={`/img/${props.img}`} alt="" className="px-4" />
    </div>
  );
};
export default Button;
