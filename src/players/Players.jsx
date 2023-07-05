import Pitcher from "./components/pitcher/Pitcher";
import Player from "./components/player/Player";
import TopBar from "./components/topbar/TopBar";

const Players = ({ teamname, closeView }) => {
  return (
    <>
      <div className="players-grid grid-fullscreen m-1 grid gap-1">
        <TopBar team={teamname} closeView={closeView}></TopBar>
        <Player name="c. bremer" position="d" ptc=".600"></Player>
        <Pitcher name="j. blendl"></Pitcher>
        <Player name="armendariz" position="d" ptc=".600"></Player>
        <Pitcher name="kirem m."></Pitcher>
        <Player name="a.elias" position="z" ptc=".400"></Player>
        <Pitcher name="r. farias"></Pitcher>
        <Player name="m. dantus" position="d" ptc=".600"></Player>
        <Pitcher name="c.cueva"></Pitcher>
        <Player name="a. victoria" position="d" ptc=".400"></Player>
        <Pitcher name="m. flores"></Pitcher>
        <Player name="r. herrera" position="z" ptc=".400"></Player>
        <Pitcher name=""></Pitcher>
        <Player name="mauricio" position="d" ptc=".200"></Player>
        <Pitcher name=""></Pitcher>
        <Player name="andrea" position="d" ptc=".200"></Player>
        <Pitcher name=""></Pitcher>
        <Player name="l. havey" position="z" ptc=".750"></Player>
        <Pitcher name=""></Pitcher>
      </div>
    </>
  );
};
export default Players;
