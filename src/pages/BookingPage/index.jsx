import React, { useEffect } from "react";
import "./style.scss";
import BookingForm from "../../components/BookingForm";
import AvailableRoom from "../../components/AvailableRoom";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchAllRoom,
  clearSelectedRoom,
  setNewPage,
  setSelectedRoom,
} from "../../Redux/features/RoomSlice";
import { Pagination } from "antd";
import RoomPopup from "../../components/RoomPopUp";

const BookingPage = () => {
  const dispatch = useDispatch();
  const {
    rooms,
    checkAvailableRoom,
    pagination,
    availableRooms,
    selectedRoom,
  } = useSelector((state) => state.room);

  console.log(checkAvailableRoom);
  console.log(availableRooms);

  useEffect(() => {
    dispatch(
      actFetchAllRoom({
        _page: pagination.currentPage,
        _limit: pagination.limitPerPage,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.currentPage]);

  useEffect(() => {
    return () => {
      dispatch(setNewPage(1));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClearPopup = () => {
    dispatch(clearSelectedRoom());
  };

  const handleShowPopup = (room) => {
    dispatch(setSelectedRoom(room));
  };

  const handleChangPage = (newPage) => {
    dispatch(setNewPage(newPage));
    dispatch(
      actFetchAllRoom({
        _page: newPage,
        _limit: pagination.limitPerPage,
      })
    );
  };
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
            {rooms.map((room) => (
              <AvailableRoom
                key={room.id}
                room={room}
                onShowPopup={() => handleShowPopup(room)}
              />
            ))}
          </div>
        </div>
        <Pagination
          defaultPageSize={pagination.limitPerPage}
          current={pagination.currentPage}
          total={pagination.total}
          onChange={handleChangPage}
        />
        {selectedRoom && (
          <RoomPopup
            isModalVisible={true}
            handleCancel={handleClearPopup}
            room={selectedRoom}
          />
        )}
      </div>
    </div>
  );
};

export default BookingPage;
