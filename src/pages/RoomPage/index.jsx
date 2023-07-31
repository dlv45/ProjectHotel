import React from "react";
import FilterSection from "../../components/FilterSection";
import AvailableRoom from "../../components/AvailableRoom";
import "./style.scss";

const RoomPage = () => {
  return (
    <div className="hotel-room-container">
      <div className="hotel-room-layout">
        <div className="hotel-room-layout__filter">
          <FilterSection />
        </div>
        <div className="hotel-room-layout__detail">
          <AvailableRoom />
          <AvailableRoom />
          <AvailableRoom />
          <AvailableRoom />
          <AvailableRoom />
        </div>
      </div>
    </div>
  );
};
export default RoomPage;
