import React from "react";
import { Select, Button } from "antd";
import "./style.scss";

const { Option } = Select;

const FilterSection = () => {
  const priceOptions = [
    { label: "Dưới 500.000 VND", value: "500000" },
    { label: "500.000 - 1.000.000 VND", value: "1000000" },
    { label: "1.000.000 - 2.000.000 VND", value: "2000000" },
    { label: "Trên 2.000.000 VND", value: "2000000+" },
  ];
  return (
    <div className="filter-section">
      <div className="filter-title">
        <h2 style={{ color: "rgb(142, 0, 0)" }}>Chọn lọc theo: </h2>
      </div>
      <div className="filter-item">
        <label>Hạng phòng:</label>
        <Select style={{ width: "100%" }} placeholder="Chọn hạng phòng">
          <Option value="standard">Standard</Option>
          <Option value="deluxe">Superior</Option>
          <Option value="suite">Deluxe</Option>
        </Select>
      </div>
      <div className="filter-item">
        <label>Giá phòng:</label>
        {/* Thêm selector cho giá phòng */}
        <Select defaultValue="all" style={{ width: "100%" }}>
          <Option value="all">Tất cả</Option>
          {priceOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>
      <div className="filter-item">
        <label>Số lượng khách:</label>
        <Select style={{ width: "100%" }} placeholder="Chọn số lượng khách">
          <Option value="2">1-2</Option>
          <Option value="4">2-4</Option>
          <Option value="6">4-6</Option>
          <Option value="8">6-8</Option>
          <Option value="10">8-10</Option>
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
