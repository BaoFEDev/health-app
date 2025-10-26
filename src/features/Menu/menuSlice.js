import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
  },
});

export const { increment, decrement, incrementByAmount } = menuSlice.actions;
export default menuSlice.reducer;