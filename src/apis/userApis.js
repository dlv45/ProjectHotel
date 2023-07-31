import axios from "axios";

export const UserAPIs = {
  createUser: async (user) => {
    return await axios.post(`${process.env.REACT_APP_BE_URL}users`, user);
  },
  getUserByID: async (userID) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}tasks/${userID}`
    );
    return response.data;
  },
  updateUserById: async (id, userUpdate) => {
    return await axios.patch(
      `${process.env.REACT_APP_BE_URL}tasks/${id}`,
      userUpdate
    );
  },
  getAllUser: async (params) => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}users`, {
      params: params,
    });
    return response;
  },
};
