import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice } from "../redux/reducers/gameSlice";

const useCheckBalls = () => {
  const dispatch = useDispatch();
  const { turn, balls, at_bat } = useSelector((state) => state.game);

  useEffect(() => {
    if (balls === 4) {
      dispatch(gameSlice.actions.basePerBall({ at_bat, turn }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balls]);
};

export default useCheckBalls;
