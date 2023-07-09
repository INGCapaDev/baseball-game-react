import { useId } from "react";
import GridItems from "./components/GridItems";

const Grid = (props) => {
  const id = useId()
  const values = props.values;
  const rhe = props.rhe;

  const items = values.map((value, index) => (
    <GridItems key={`${id}-v-${index}`} value={value}></GridItems>
  ));
  const itemsRHE = rhe.map((value, index) => (
    <GridItems key={`${id}-rhe-${index}`} value={value}></GridItems>
  ));

  return (
    <div className="grid-squares col-span-12 grid gap-1">
      {items}
      <div className="col-span-3 grid grid-cols-3 bg-black">{itemsRHE}</div>
    </div>
  );
};
export default Grid;
