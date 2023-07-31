import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice } from "../redux/reducers/gameSlice";

const useCheckDraw = () => {
  const dispatch = useDispatch();
  const { entrance, rhe, turn } = useSelector((state) => state.game);

  useEffect(() => {
    if (entrance === 8) {
      if (turn === "locals") {
        if (parseInt(rhe[0]["locals"]) > parseInt(rhe[0]["visitors"])) {
          dispatch(gameSlice.actions.changeTurn({ turn: "visitors" }));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrance, rhe, turn]);
};

export default useCheckDraw;
