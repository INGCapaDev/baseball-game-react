import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice } from "../redux/reducers/gameSlice";

const useCheckOuts = () => {
  const dispatch = useDispatch();
  const { turn, outs } = useSelector((state) => state.game);

  useEffect(() => {
    if (outs === 3) {
      dispatch(
        gameSlice.actions.changeTurn({
          turn: turn === "visitors" ? "locals" : "visitors",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outs, turn]);
};

export default useCheckOuts;
