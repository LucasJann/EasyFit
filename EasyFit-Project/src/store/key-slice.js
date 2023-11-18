import { createSlice } from "@reduxjs/toolkit";

const keySlice = createSlice({
  name: "key",
  initialState: {
    code: "",
  },
  reducers: {
    storeKey(state, action) {
      state.code = action.payload;
    },
  },
});

export const keyActions = keySlice.actions;
export default keySlice;
