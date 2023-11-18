import { createSlice } from "@reduxjs/toolkit";

const imcCalcSlice = createSlice({
  name: "imcCalc",
  initialState: {
    imc: 0,
  },
  reducers: {
    calc(state, action) {
      const [weight, height] = action.payload;

      const numericHeight = parseFloat(height) / 100; // Converter altura para metros

      state.imc = weight / (numericHeight * numericHeight);
      console.log(state.imc);
    },
  },
});

export const imcCalcActions = imcCalcSlice.actions;

export default imcCalcSlice;