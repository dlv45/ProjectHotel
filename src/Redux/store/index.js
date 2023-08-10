import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/UserSlice";
import { roomReducer } from "../features/RoomSlice";
import { bookingReducer } from "../features/BookingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
    booking: bookingReducer,
  },
});
