import { produce } from "immer";
import { useDispatch, useSelector } from "react-redux";
import { localsSlice } from "../redux/reducers/localsSlice";
import { visitorsSlice } from "../redux/reducers/visitorsSlice";
import { useEffect } from "react";

export const useEntry = () => {
  const dispatch = useDispatch();
  const { turn, rhe, lastPlay } = useSelector((state) => state.game);
  const batters = useSelector((state) => state[turn].batters);
  const last_batter = useSelector((state) => state[turn].last_batter);

  useEffect(() => {
    if (last_batter != null) {
      const newBatters = produce(batters, (draftBatters) => {
        draftBatters[last_batter.index].entries[
          last_batter.batter.times
        ].runs = `${rhe[0].visitors} - ${rhe[0].locals}`;
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
