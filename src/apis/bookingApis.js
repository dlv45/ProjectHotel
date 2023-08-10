import axios from "axios";

export const BookingAPIs = {
  createBooking: async (booking) => {
    return await axios.post(`${process.env.REACT_APP_BE_URL}bookings`, booking);
  },
  getBookingByID: async (bookingID) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}bookings/${bookingID}`
    );
    return response.data;
  },
  getAllBooking: async (params) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}bookings`,
      {
        params: params,
      }
    );
    return response;
  },
};
