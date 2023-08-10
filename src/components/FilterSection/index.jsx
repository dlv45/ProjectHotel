import React from "react";
import { Select, Button } from "antd";
import "./style.scss";
import { useDispatch } from "react-redux";
import {
  filterGuest,
  filterPrice,
  updateFilterRoom,
} from "../../Redux/features/RoomSlice";

const { Option } = Select;

const FilterSection = () => {
  const dispatch = useDispatch();

  const handleChangeRoomType = (value) => {
    dispatch(updateFilterRoom(value));
  };

  const handleChangeSortPrice = (value) => {
    dispatch(filterPrice(value));
  };

  const handleChangSortGuest = (value) => {
    const updateValue = value.split("-");
    dispatch(filterGuest(updateValue));
  };

  return (
    <div className="filter-section">
      <div className="filter-title">
        <h2 style={{ color: "rgb(142, 0, 0)" }}>Chọn lọc theo: </h2>
      </div>
      <div className="filter-item">
        <label>Hạng phòng:</label>
        <Select
          style={{ width: "100%" }}
          placeholder="Chọn hạng phòng"
          onChange={handleChangeRoomType}
        >
          <Option value="standard">Standard</Option>
          <Option value="superior">Superior</Option>
          <Option value="deluxe">Deluxe</Option>
          <Option value="apartment">Apartment</Option>
        </Select>
      </div>
      <div className="filter-item">
        <label>Sắp xếp giá:</label>
        <Select
          defaultValue="asc"
          style={{ width: "100%" }}
          onChange={handleChangeSortPrice}
        >
          <Option value="desc">Giảm dần</Option>
          <Option value="asc">Tăng dần</Option>
        </Select>
      </div>

      <div className="filter-item">
        <label>Số lượng khách:</label>
        <Select
          style={{ width: "100%" }}
          placeholder="Chọn số lượng khách"
          onChange={handleChangSortGuest}
        >
          <Option value="1-2">1-2</Option>
          <Option value="2-4">2-4</Option>
          <Option value="4-6">4-6</Option>
          <Option value="6-8">6-8</Option>
          <Option value="8-10">8-10</Option>
        </Select>
      </div>
      <Button
        type="primary"
        block
        style={{ backgroundColor: "rgb(142, 0, 0)" }}
      >
        Áp dụng bộ lọc
      </Button>
    </div>
  );
};

export default FilterSection;
