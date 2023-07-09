import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";
import { gameSlice } from "./gameSlice";

const SLICE_NAME = "visitors"

const INIT_BATTERS = new Array(9).fill(1).map((_, index) => ({
  id: nanoid(),
  name: `BATEADOR ${index + 1}`,
  runs: 0,
  times: 0,
  record: ""
}))

const INIT_AT_BAT = {
  index: -1,
  batter: null,
}

const getNextBatterIndex = (at_bat, batters) => {
  const index = at_bat.index
  return index + 1 <= batters.length ? index + 1: 0
}

const getAtBat = (at_bat, batters) => {
  const newIndex = getNextBatterIndex(at_bat, batters)
  return {
    index: newIndex,
    batter: batters[newIndex]
  }
}

const setNextBatter = (state, action) => {
  if(action.payload.turn == SLICE_NAME){
    state.at_bat = getAtBat(state.at_bat, state.batters)
  }
}

export const visitorsSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    batters: INIT_BATTERS,
    team_name: "VISITOR",
    at_bat: INIT_AT_BAT
  },
  reducers: {
    changeBatterName: (state, action) => {
      const { id, name } = action.payload;
      const batter = state.batters.find((batter) => batter.id === id);
      if (batter) {
        batter.name = name;
      }
    },
    changeTeamName: (state, action) => {
      state.team_name = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(gameSlice.actions.initGame, (state) => {
      state.at_bat = {
        index: 0,
        batter: state.batters[0]
      }
    })

    builder.addCase(gameSlice.actions.out, setNextBatter)
    builder.addCase(gameSlice.actions.simple, setNextBatter)
    builder.addCase(gameSlice.actions.double, setNextBatter)
    builder.addCase(gameSlice.actions.triple, setNextBatter)
    builder.addCase(gameSlice.actions.changeTurn, setNextBatter)
  }
});


export const getBatters = createSelector(
  (state) => state.visitors.batters
)