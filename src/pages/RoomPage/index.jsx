import React, { useEffect } from "react";
import FilterSection from "../../components/FilterSection";
import AvailableRoom from "../../components/AvailableRoom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchAllRoom,
  clearSelectedRoom,
  setNewPage,
  setSelectedRoom,
} from "../../Redux/features/RoomSlice";
import { Pagination } from "antd";
import RoomPopup from "../../components/RoomPopUp";

const RoomPage = () => {
  const rooms = useSelector((state) => state.room.rooms);
  const dispatch = useDispatch();
  const { pagination, filters, selectedRoom } = useSelector(
    (state) => state.room
  );

  useEffect(() => {
    dispatch(
      actFetchAllRoom({
        _page: pagination.currentPage,
        _limit: pagination.limitPerPage,
        ...(!!filters.class ? filters : {}),
        _sort: filters.sort,
        _order: filters.order,
        // _gte: filters.guest_gte,
        // _lte: filters.guest_lte,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.currentPage, filters]);

  useEffect(() => {
    return () => {
      dispatch(setNewPage(1));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClearPopup = () => {
    dispatch(clearSelectedRoom());
  };

  const handleChangPage = (newPage) => {
    dispatch(setNewPage(newPage));
  };

  const handleShowPopup = (room) => {
    dispatch(setSelectedRoom(room));
  };

  return (
    <div className="hotel-room-container">
      <div className="hotel-room-layout">
        <div className="hotel-room-layout__filter">
          <FilterSection />
        </div>
        <div className="hotel-room-layout__content">
          <div className="hotel-room-layout__detail">
            {rooms.map((room) => (
              <AvailableRoom
                key={room.id}
                room={room}
                onShowPopup={() => handleShowPopup(room)}
              />
            ))}
          </div>

          <Pagination
            defaultPageSize={pagination.limitPerPage}
            current={pagination.currentPage}
            total={pagination.total}
            onChange={handleChangPage}
          />
        </div>
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
export default RoomPage;
