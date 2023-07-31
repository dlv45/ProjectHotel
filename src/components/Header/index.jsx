import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import "./style.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Button, Menu, Dropdown } from "antd";
import {
  DownOutlined,
  UserOutlined,
  ApartmentOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/features/UserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector((state) => state.user);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleToLogin = () => {
    navigate(ROUTES.LOGIN_PAGE);
  };
  const handleToSignIn = () => {
    navigate(ROUTES.SIGNIN_PAGE);
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setIsMobileScreen(true);
      setShowMenu(false); // Ẩn menu dropdown khi chuyển về màn hình nhỏ
    } else {
      setIsMobileScreen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = ({ key }) => {
    if (key === "accountInfo") {
      navigate(ROUTES.ACCOUNT_INFO_PAGE);
    } else if (key === "bookingInfo") {
      navigate(ROUTES.BOOKING_INFO_PAGE);
    } else if (key === "logout") {
      handleLogout();
    }
  };

  const handleMenuItemClick = () => {
    if (isMobileScreen && showMenu) {
      setShowMenu(false);
    }
  };

  console.log(isLoggedIn, "isLoggedIn");

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="accountInfo" icon={<UserOutlined />}>
        Thông tin tài khoản
      </Menu.Item>
      <Menu.Item key="bookingInfo" icon={<ApartmentOutlined />}>
        Thông tin đặt phòng
      </Menu.Item>
      <Menu.Item key="logout">Đăng Xuất</Menu.Item>
    </Menu>
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className="header__menu-left">
        <div className="header__logo">
          <Link to={ROUTES.HOME_PAGE}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <Button
          className="header__menu-toggle"
          type="primary"
          size="small"
          style={{ backgroundColor: "rgb(142, 0, 0)" }}
          onClick={handleToggleMenu}
        >
          <MenuOutlined />
        </Button>
        <ul className={`header__menu-ul ${showMenu ? "show-menu" : ""}`}>
          <li
            className={`header__menu-li ${
              ROUTES.INTRODUCE_PAGE.includes(location.pathname) ? "active" : ""
            }`}
            onClick={handleMenuItemClick}
          >
            <Link to={ROUTES.INTRODUCE_PAGE} style={{ paddingRight: "10px" }}>
              GIỚI THIỆU
            </Link>
          </li>
          <li
            className={`header__menu-li ${
              ROUTES.ROOM_PAGE.includes(location.pathname) ? "active" : ""
            }`}
          >
            <Link to={ROUTES.ROOM_PAGE}>PHÒNG NGHỈ</Link>
          </li>
          <li
            className={`header__menu-li ${
              ROUTES.SERVICE_PAGE.includes(location.pathname) ? "active" : ""
            }`}
          >
            <Link to={ROUTES.SERVICE_PAGE}>DỊCH VỤ</Link>
          </li>
          <li
            className={`header__menu-li ${
              ROUTES.CONTACT_PAGE.includes(location.pathname) ? "active" : ""
            }`}
          >
            <Link to={ROUTES.CONTACT_PAGE}>LIÊN HỆ</Link>
          </li>
          <li
            className={`header__menu-li ${
              ROUTES.BOOKING_PAGE.includes(location.pathname) ? "active" : ""
            }`}
          >
            <Link to={ROUTES.BOOKING_PAGE} className="booking-header">
              ĐẶT PHÒNG
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__menu-right">
        {!isLoggedIn && (
          <li className="header__menu-btn">
            <Button
              type="primary"
              size="small"
              style={{ backgroundColor: "rgb(142, 0, 0)" }}
              onClick={handleToLogin}
            >
              Đăng Nhập
            </Button>
            <Button
              type="primary"
              size="small"
              style={{ backgroundColor: "rgb(142, 0, 0)" }}
              onClick={handleToSignIn}
            >
              Đăng Ký
            </Button>
          </li>
        )}
        {isLoggedIn && (
          <div className="header__menu-user">
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button
                type="primary"
                size="small"
                style={{ backgroundColor: "rgb(142, 0, 0)" }}
                className="btn-user"
              >
                <UserOutlined />
                {showMenu && <DownOutlined />}
              </Button>
            </Dropdown>
            <div className="hi-user">
              <p>Chào {userInfo.email},</p>
            </div>
            {showMenu && (
              <ul className="header__menu-ul--user">
                <li>
                  <Link to={ROUTES.ACCOUNT_INFO_PAGE}>Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to={ROUTES.BOOKING_INFO_PAGE}>Thông tin đặt phòng</Link>
                </li>
                <li>
                  <Link to="#">Đăng Xuất</Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
