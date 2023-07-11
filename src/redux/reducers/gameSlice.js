/* eslint-disable no-extra-boolean-cast */
import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "game";

const initialState = {
  inited: false,
  turn: "visitors",
  careers: new Array(9).fill(1).map(() => ({
    visitors: 0,
    locals: 0,
  })),
  entrance: 0,
  outs: 0,
  balls: 0,
  strikes: 0,
  // 1ra, 2da, 3ra
  bases: [null, null, null],
};

export const gameSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    initGame: (state) => {
      state.inited = true;
      state.careers = new Array(9).fill(1).map(() => ({
        visitors: 0,
        locals: 0,
      }));
    },
    homeRun: (state) => {
      // carrera de bateador
      state.careers[state.entrance][state.turn]++;

      // carrera por bases

      const count = state.bases.reduce(
        (a, base) => a + (Boolean(base) ? 1 : 0),
        0
      );
      state.careers[state.entrance][state.turn] += count;

      state.bases = [null, null, null];
      state.balls = 0;
      state.strikes = 0;
    },
    simple: (state, action) => {
      let _bases = [...state.bases];

      if (_bases[2]) {
        _bases[2] = null;
        state.careers[state.entrance][state.turn]++;
      }

      if (_bases[1]) {
        _bases[2] = { ..._bases[1] };
        _bases[1] = null;
      }

      if (_bases[0]) {
        _bases[1] = { ..._bases[0] };
        _bases[0] = null;
      }

      _bases[0] = action.payload.at_bat;

      state.bases = _bases;
      state.balls = 0;
      state.strikes = 0;
    },
    double: (state, action) => {
      let _bases = [...state.bases];

      if (_bases[2]) {
        _bases[2] = null;
        state.careers[state.entrance][state.turn]++;
      }

      if (_bases[1]) {
        state.careers[state.entrance][state.turn]++;
        _bases[1] = null;
      }

      if (_bases[0]) {
        _bases[2] = { ..._bases[0] };
        _bases[0] = null;
      }

      _bases[1] = action.payload.at_bat;

      state.bases = _bases;
      state.balls = 0;
      state.strikes = 0;
      console.log(state.bases);
    },
    triple: (state, action) => {
      let _bases = [...state.bases];

      if (_bases[2]) {
        _bases[2] = null;
        state.careers[state.entrance][state.turn]++;
      }

      if (_bases[1]) {
        state.careers[state.entrance][state.turn]++;
        _bases[1] = null;
      }

      if (_bases[0]) {
        state.careers[state.entrance][state.turn]++;
        _bases[0] = null;
      }

      _bases[2] = action.payload.at_bat;

      state.bases = _bases;
      state.balls = 0;
      state.strikes = 0;
    },
    deleteAll: (state) => {
      switch (state.outs) {
        case 0:
          state.outs = state.outs + 3;
          state.strikes = 0;
          state.balls = 0;
          break;
        case 1:
          state.outs = state.outs + 2;
          state.strikes = 0;
          state.balls = 0;
          break;
        case 2:
          state.outs = state.outs + 1;
          state.strikes = 0;
          state.balls = 0;
          break;
        default:
          break;
      }
    },
    out: (state) => {
      state.outs = state.outs + 1;
      state.strikes = 0;
      state.balls = 0;
    },
    basePerBall: (state, action) => {
      let _bases = [...state.bases];

      if (_bases[2] && _bases[1] && _bases[0]) {
        _bases[2] = { ..._bases[1] };
        _bases[1] = { ..._bases[0] };
        _bases[0] = null;
        state.careers[state.entrance][state.turn]++;
      }

      if (_bases[1] && _bases[0]) {
        _bases[2] = { ..._bases[1] };
        _bases[1] = { ..._bases[0] };

        _bases[0] = null;
      }

      if (_bases[0]) {
        _bases[1] = { ..._bases[0] };
        _bases[0] = null;
      }

      _bases[0] = action.payload.at_bat;

      state.bases = _bases;
      state.balls = 0;
      state.strikes = 0;
    },
    changeTurn: (state, action) => {
      (state.outs = 0), (state.strikes = 0);
      state.bases = [null, null, null];
      state.turn = action.payload.turn;
      state.entrance =
        action.payload.turn == "visitors" ? state.entrance + 1 : state.entrance;
    },
    ball: (state, action) => {
      let _bases = [...state.bases];
      if (!state.inited) return;

      if (state.balls + 1 == 4) {
        state.balls = 0;

        if (_bases[2] && _bases[1] && _bases[0]) {
          _bases[2] = { ..._bases[1] };
          _bases[1] = { ..._bases[0] };
          _bases[0] = null;
          state.careers[state.entrance][state.turn]++;
        }

        if (_bases[1] && _bases[0]) {
          _bases[2] = { ..._bases[1] };
          _bases[1] = { ..._bases[0] };

          _bases[0] = null;
        }

        if (_bases[0]) {
          _bases[1] = { ..._bases[0] };
          _bases[0] = null;
        }

        _bases[0] = action.payload.at_bat;

        state.bases = _bases;
        state.balls = 0;
        state.strikes = 0;
      } else {
        state.balls++;
      }
    },
    strike: (state) => {
      if (!state.inited) return;

      if (state.strikes + 1 == 3) {
        state.strikes = 0;
        state.balls = 0;
        state.outs++;
      } else {
        state.strikes++;
      }
    },
  },
});
