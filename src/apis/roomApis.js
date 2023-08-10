import axios from "axios";

export const RoomAPIs = {
  getAllRooms: async (params) => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}rooms`, {
      params: params,
    });
    return response;
  },
  getRoomById: async (roomId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}rooms/${roomId}`
    );
    return response.data;
  },
};
