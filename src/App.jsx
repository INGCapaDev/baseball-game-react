import Balls from "./components/balls/Balls";
import Button from "./components/button/Button";
import Grid from "./components/grid/Grid";
import Modal from "./components/modal/Modal";
import Out from "./components/outs/Out";
import Team from "./components/teams/Team";

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const emptyValues = ["", "", "", "", "", "", "", "", ""];
const rhe = ["r", "h", "e"];
const emptyRHE = ["", "", ""];

function App() {
  return (
    <>
      <div className="container-grid grid-fullscreen m-1 grid gap-1">
        <div className="col-span-6 row-span-4 bg-orange-300"></div>
        <Out text="Out"></Out>
        <Button img="settings.svg"></Button>
        <div className="col-span-4 row-span-2 flex items-center justify-center bg-orange-500">
          <span className="text-[6vh] font-bold uppercase text-white">
            Play
          </span>
        </div>
        <Out text="strikes"></Out>
        <Button img="back.svg"></Button>
        <Balls></Balls>
        {/* <Modal></Modal> */}
        <Grid values={values} rhe={rhe}></Grid>
        <Team name="visitor team"></Team>
        <Grid values={emptyValues} rhe={emptyRHE}></Grid>
        <Team name="local team"></Team>
        <Grid values={emptyValues} rhe={emptyRHE}></Grid>
        <div className="col-span-full row-span-3 bg-orange-500"></div>
      </div>
    </>
  );
}
export default App;
