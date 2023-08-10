import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPIs } from "../../apis/userApis";
import { message } from "antd";
import { globalNavigate } from "../../utils/globalHistory";
import { ROUTES } from "../../constants/routes";

const initialState = {
  isLoading: false,
  users: [],
  errors: {},
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
};

export const actCreateNewUser = createAsyncThunk(
  "user/createNewUser",
  async (user, thunkAPI) => {
    try {
      const response = await UserAPIs.getAllUser();
      const users = response.data;
      const { email } = user;
      const foundUser = users.find((u) => u.email === email);
      if (foundUser) {
        // Nếu email đã tồn tại, trả về lỗi thông báo
        return thunkAPI.rejectWithValue("Email đã tồn tại.");
      } else {
        await UserAPIs.createUser(user);
      }
    } catch (error) {}
  }
);

export const actLoginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await UserAPIs.getAllUser();
      const users = response.data;
      const { email, password } = user;
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );
      delete foundUser.password;

      if (foundUser) {
        thunkAPI.dispatch(loginSuccess(foundUser));
      } else {
        return thunkAPI.rejectWithValue("Email hoặc mật khẩu không chính xác!");
      }
    } catch (error) {}
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.userInfo = action.payload;
      message.success("Đăng nhập thành công!!");
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.userInfo = action.payload;
      message.error("Email hoặc mật khẩu không đúng.");
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("userInfo", JSON.stringify({}));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("userInfo", JSON.stringify(null));
      globalNavigate(ROUTES.HOME_PAGE);
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actCreateNewUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actCreateNewUser.rejected, (state, action) => {
      state.errors = {};
      message.error("Email đã tồn tại!!");
      state.isLoading = false;
    });
    builder.addCase(actCreateNewUser.fulfilled, (state, action) => {
      state.isLoading = false;
      message.success("Tạo tài khoản thành công!!");
      globalNavigate(ROUTES.LOGIN_PAGE);
    });
    builder.addCase(actLoginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actLoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = {};
      message.error(action.payload);
    });
    builder.addCase(actLoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      globalNavigate(ROUTES.BOOKING_PAGE);
    });
  },
});

export const { setLoading, loginSuccess, loginFailure, setUserInfo, logout } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
