import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  bookings: [],
  errors: {},
  roomBooking: {},
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLoading } = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;
