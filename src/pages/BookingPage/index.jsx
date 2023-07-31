import React from "react";
import "./style.scss";
import BookingForm from "../../components/BookingForm";
import AvailableRoom from "../../components/AvailableRoom";

const BookingPage = () => {
  return (
    <div>
      <div className="booking-page-container">
        <div className="booking-page-container__form">
          <div className="booking-page-container__title">
            <h1>ĐẶT PHÒNG KHÁCH SẠN</h1>
          </div>
          <BookingForm />
        </div>
        <div className="booking-page-container__available">
          <div className="booking-page-container__title">
            <h2>DANH SÁCH PHÒNG TRỐNG</h2>
          </div>
          <div className="booking-page-container__room">
            <AvailableRoom />
            <AvailableRoom />
            <AvailableRoom />
            <AvailableRoom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
