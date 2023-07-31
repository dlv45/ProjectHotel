import axios from "axios";

export const RoomAPIs = {
  getAllRooms: async (params) => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}rooms`, {
      params: params,
    });
    return response;
  },
  getRoomById: async (RoomId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}tasks/${RoomId}`
    );
    return response.data;
  },
};
