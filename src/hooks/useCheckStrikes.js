import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice } from "../redux/reducers/gameSlice";

const useCheckStrikes = () => {
  const dispatch = useDispatch();
  const { strikes, turn } = useSelector((state) => state.game);

  useEffect(() => {
    if (strikes === 3) {
      dispatch(gameSlice.actions.out({ turn }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strikes]);
};

export default useCheckStrikes;
