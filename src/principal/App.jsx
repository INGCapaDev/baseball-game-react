import { useState } from "react";
import Balls from "./components/balls/Balls";
import Button from "./components/button/Button";
import Grid from "./components/grid/Grid";
import Modal from "./components/modal/Modal";
import Out from "./components/outs/Out";
import Play from "./components/play/Play";
import Team from "./components/teams/Team";

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const emptyValues = ["", "", "", "", "", "", "", "", ""];
const rhe = ["r", "h", "e"];
const emptyRHE = ["", "", ""];

function App() {
  const [game, setGame] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="container-grid grid-fullscreen m-1 grid gap-1">
        <div className="col-span-6 row-span-4 bg-orange-300"></div>
        <Out text="Out"></Out>
        <Button img="settings.svg"></Button>
        {game ? (
          <Play text="Jugada" onClick={() => setMenu(true)}></Play>
        ) : (
          <Play text="Play" onClick={() => setGame(true)}></Play>
        )}

        <Out text="strikes"></Out>
        <Button img="back.svg"></Button>
        <Balls></Balls>
        {menu ? <Modal onClick={() => setMenu(false)}></Modal> : null}
        {menu ? null : <Grid values={values} rhe={rhe}></Grid>}
        <Team name="visitor team"></Team>
        {menu ? null : <Grid values={emptyValues} rhe={emptyRHE}></Grid>}
        <Team name="local team"></Team>
        {menu ? null : <Grid values={emptyValues} rhe={emptyRHE}></Grid>}
        <div className="col-span-full row-span-3 bg-orange-500"></div>
      </div>
    </>
  );
}
export default App;
