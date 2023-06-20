import Text from "./Text";

const Entry = (props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-stone-800 text-center">
      <Text text={props.score}></Text>
      <Text text={props.game}></Text>
    </div>
  );
};
export default Entry;
