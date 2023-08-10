import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { ROUTES } from "./constants/routes";
import IntroducePage from "./pages/IntroducePage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import SignInPage from "./pages/SignInPage";
import RoomPage from "./pages/RoomPage";
import AccountInfoPage from "./pages/AccountInfoPage";
import BookingInfoPage from "./pages/BookingInfoPage";
import DetailRoomPage from "./pages/DetailRoomPage";
import { GlobalHistory } from "./utils/globalHistory";

function App() {
  return (
    <BrowserRouter>
      <GlobalHistory />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
          <Route path={ROUTES.INTRODUCE_PAGE} element={<IntroducePage />} />
          <Route path={ROUTES.ROOM_PAGE} element={<RoomPage />} />
          <Route path={ROUTES.CONTACT_PAGE} element={<ContactPage />} />
          <Route path={ROUTES.BOOKING_PAGE} element={<BookingPage />} />
          <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
          <Route path={ROUTES.SIGNIN_PAGE} element={<SignInPage />} />
          <Route path={ROUTES.DETAIL_ROOM_PAGE} element={<DetailRoomPage />} />
          <Route
            path={ROUTES.ACCOUNT_INFO_PAGE}
            element={<AccountInfoPage />}
          />
          <Route
            path={ROUTES.BOOKING_INFO_PAGE}
            element={<BookingInfoPage />}
          />
        </Route>
        <Route path={"/"} element={<Navigate to={ROUTES.HOME_PAGE} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
