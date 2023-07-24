import { produce } from "immer";
import { useDispatch, useSelector } from "react-redux";
import { localsSlice } from "../redux/reducers/localsSlice";
import { visitorsSlice } from "../redux/reducers/visitorsSlice";
import { useEffect } from "react";

export const useEntry = () => {
  function useHitsForLastBatter(last_batter, turn) {
    const hits = useSelector((state) => {
      if (last_batter != null) {
        return state.game.hits[last_batter.index][turn];
      }
      return null;
    });

    return hits;
  }
  const dispatch = useDispatch();
  const { turn, lastPlay } = useSelector((state) => state.game);
  const batters = useSelector((state) => state[turn].batters);
  const last_batter = useSelector((state) => state[turn].last_batter);
  const hits = useHitsForLastBatter(last_batter, turn);

  useEffect(() => {
    if (last_batter != null) {
      const newBatters = produce(batters, (draftBatters) => {
        draftBatters[last_batter.index].entries[
          last_batter.batter.times
        ].runs = `${hits} - ${last_batter.batter.times + 1}`;
        draftBatters[last_batter.index].entries[last_batter.batter.times].play =
          lastPlay;
      });
      if (turn == "locals") {
        dispatch(localsSlice.actions.changeBatters([...newBatters]));
      }
      if (turn == "visitors") {
        dispatch(visitorsSlice.actions.changeBatters([...newBatters]));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [last_batter]);
};
