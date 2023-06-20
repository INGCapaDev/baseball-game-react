import GridItems from "./components/GridItems";

const Grid = (props) => {
  const values = props.values;
  const rhe = props.rhe;
  const items = values.map((value) => (
    <GridItems key={value} value={value}></GridItems>
  ));
  const itemsRHE = rhe.map((value) => (
    <GridItems key={value} value={value}></GridItems>
  ));

  return (
    <div className="grid-squares col-span-12 grid gap-1">
      {items}
      <div className="col-span-3 grid grid-cols-3 bg-black">{itemsRHE}</div>
    </div>
  );
};
export default Grid;
