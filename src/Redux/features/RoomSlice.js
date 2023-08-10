import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RoomAPIs } from "../../apis/roomApis";

const initialState = {
  isLoading: false,
  rooms: [],
  errors: {},
  pagination: {
    currentPage: 1,
    limitPerPage: 4,
    total: 8,
  },
  selectedRoom: null,
  filters: {
    class: "",
    sort: "price",
    order: "asc",
    // guest_gte: "",
    // guest_lte: "",
  },
  availableRooms: [],
};

export const actFetchRoomById = createAsyncThunk(
  "rooms/fetchRoomById",
  async (roomId) => {
    const room = await RoomAPIs.getRoomById(roomId);
    return room;
  }
);

export const actFetchAllRoom = createAsyncThunk(
  "rooms/fetchAllRoom",
  async (params = {}) => {
    const response = await RoomAPIs.getAllRooms(params);
    return {
      data: response.data,
      total: response.headers.get("X-Total-Count"),
    };
  }
);

export const actCheckAvailableRoom = createAsyncThunk(
  "rooms/checkAvailableRoom",
  async (available) => {
    const response = await RoomAPIs.getAllRooms(available);
    return {
      data: response.data,
      total: response.headers.get("X-Total-Count"),
    };
  }
);

const roomSlice = createSlice({
  name: "rooms",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setNewPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setSelectedRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
    clearSelectedRoom: (state) => {
      state.selectedRoom = null;
    },
    updateFilterRoom: (state, action) => {
      state.filters.class = action.payload;
    },
    filterPrice: (state, action) => {
      state.filters.order = action.payload;
    },
    filterGuest: (state, action) => {
      state.filters.guest_gte = action.payload;
      state.filters.guest_lte = action.payload;
    },
    checkAvailableRoom: (state) => {
      state.availableRooms = state.rooms.filter((room) => room.available);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actFetchAllRoom.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actFetchAllRoom.rejected, (state, action) => {
      state.errors = {};
      state.isLoading = false;
    });
    builder.addCase(actFetchAllRoom.fulfilled, (state, action) => {
      state.rooms = action.payload.data;
      state.isLoading = false;
      state.pagination.total = action.payload.total;
    });

    builder.addCase(actFetchRoomById.fulfilled, (state, action) => {
      state.currentTask = action.payload;
    });
    builder.addCase(actCheckAvailableRoom.fulfilled, (state, action) => {
      state.rooms = action.payload.data;
      state.isLoading = false;
      state.pagination.total = action.payload.total;
    });
  },
});

export const {
  setLoading,
  setNewPage,
  setSelectedRoom,
  clearSelectedRoom,
  updateFilterRoom,
  filterPrice,
  filterGuest,
  checkAvailableRoom,
} = roomSlice.actions;

export const roomReducer = roomSlice.reducer;
