import { createSlice, nanoid } from "@reduxjs/toolkit";
import { gameSlice } from "./gameSlice";

const LOCAL_SLICE_NAME = "locals"

const INIT_AT_BAT = {
  index: -1,
  batter: null
}

const INIT_BATTERS = new Array(8).fill(1).map((_, index) => ({
  id: nanoid(),
  name: `BATEADOR ${index + 1}`,
  runs: 0,
  times: 0,
  record: ""
}))

const getNextBatterIndex = (at_bat, batters) => {
  const index = at_bat.index
  return index + 1 <= batters.length ? index + 1: 0
}

export const localsSlice = createSlice({
  name: LOCAL_SLICE_NAME,
  initialState: {
    batters: INIT_BATTERS,
    team_name: "LOCAL",
    at_bat: INIT_AT_BAT
  },
  reducers: {
    changeBatterName: (state, action) => {
      const index = state.batters.findIndex((batter) => action.payload.id == batter.id)
      state.batters[index].name = action.payload.name
    },
    changeTeamName: (state, action) => {
      state.team_name = action.payload
    },
    extraReducers: (builder) => {
      builder.addCase(gameSlice.actions.out, (state, action) => {
        if(action.payload.turn == LOCAL_SLICE_NAME){
          const newIndex = getNextBatterIndex(state.at_bat, state.batters)
          state.at_bat = {
            index: newIndex,
            batter: state.batters[newIndex]
          }
        }
      })
      
      builder.addCase(gameSlice.actions.changeTurn, (state, action) => {
        if(action.payload.turn == LOCAL_SLICE_NAME){
          const newIndex = getNextBatterIndex(state.at_bat, state.batters)
          state.at_bat = {
            index: newIndex,
            batter: state.batters[newIndex]
          }
        }
      })
    }
  },
});
