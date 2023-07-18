import { useId } from "react";
import GridItems from "./components/GridItems";
import { useSelector } from "react-redux";

const Grid = (props) => {
  const id = useId();
  const values = props.values;
  const rhe = props.rhe;
  const entrance = useSelector((state) => state.game.entrance);

  const items = values.map((value, index) => (
    <GridItems
      key={`${id}-v-${index}`}
      value={index <= entrance ? value : ""}
      colors="bg-black text-white"
    ></GridItems>
  ));
  const itemsRHE = rhe.map((value, index) => (
    <GridItems key={`${id}-rhe-${index}`} value={value}></GridItems>
  ));

  return (
    <div className="grid-squares col-span-12 grid gap-1">
      {items}
      <div className="col-span-3 grid grid-cols-3 bg-black text-white">
        {itemsRHE}
      </div>
    </div>
  );
};
export default Grid;
