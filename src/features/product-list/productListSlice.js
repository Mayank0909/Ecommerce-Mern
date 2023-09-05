import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
	value: 0,
	status: "idle",
};

export const productListSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
	},
});

export const { increment } = productListSlice.actions;

export const selectCount = (state) => state.counter.value;

export default productListSlice.reducer;
