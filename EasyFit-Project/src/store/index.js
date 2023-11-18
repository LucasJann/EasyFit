import { configureStore } from "@reduxjs/toolkit";

import keySlice from "./key-slice";
import imcCalcSlice from "./imc-slice";

const store = configureStore({
  reducer: {
    key: keySlice.reducer,
    imcCalc: imcCalcSlice.reducer,
  },
});

export default store;
