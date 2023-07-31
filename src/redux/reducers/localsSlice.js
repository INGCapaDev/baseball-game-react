import { createSlice, nanoid } from "@reduxjs/toolkit";
import { gameSlice } from "./gameSlice";

const LOCAL_SLICE_NAME = "locals";

const INIT_AT_BAT = {
  index: -1,
  batter: null,
};

const INIT_BATTERS = new Array(9).fill(1).map((_, index) => ({
  id: nanoid(),
  name: `BATEADOR ${index + 1}`,
  runs: 0,
  times: 0,
  record: "",
  entries: new Array(50).fill(1).map(() => ({
    runs: "",
    play: "",
  })),
}));

const INIT_PITCHERS = new Array(5).fill(1).map((_, index) => ({
  id: nanoid(),
  name: `PITCHER ${index + 1}`,
}));

const getNextBatterIndex = (at_bat, batters) => {
  const index = at_bat.index;
  return index + 1 < batters.length ? index + 1 : 0;
};

const getAtBat = (at_bat, batters) => {
  const newIndex = getNextBatterIndex(at_bat, batters);
  return {
    index: newIndex,
    batter: batters[newIndex],
  };
};

const setNextBatter = (state, action) => {
  if (action.payload.turn == LOCAL_SLICE_NAME) {
    state.last_batter = state.at_bat;
    state.batters[state.at_bat.index].times++;
    state.at_bat = getAtBat(state.at_bat, state.batters);
  }
};

export const localsSlice = createSlice({
  name: LOCAL_SLICE_NAME,
  initialState: {
    batters: INIT_BATTERS,
    team_name: "LOCALES",
    at_bat: INIT_AT_BAT,
    last_batter: null,
    pitchers: INIT_PITCHERS,
  },
  reducers: {
    changeBatterName: (state, action) => {
      const index = state.batters.findIndex(
        (batter) => action.payload.id == batter.id
      );
      state.batters[index].name = action.payload.name;
    },
    changeTeamName: (state, action) => {
      state.team_name = action.payload;
    },
    changeBatters: (state, action) => {
      state.batters = action.payload;
    },
    changePitchers: (state, action) => {
      state.pitchers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(gameSlice.actions.initGame, (state) => {
      state.at_bat = {
        index: 0,
        batter: state.batters[0],
      };
    });
    builder.addCase(gameSlice.actions.out, setNextBatter);
    builder.addCase(gameSlice.actions.simple, setNextBatter);
    builder.addCase(gameSlice.actions.double, setNextBatter);
    builder.addCase(gameSlice.actions.triple, setNextBatter);
    builder.addCase(gameSlice.actions.homeRun, setNextBatter);
    builder.addCase(gameSlice.actions.basePerBall, setNextBatter);
  },
});
