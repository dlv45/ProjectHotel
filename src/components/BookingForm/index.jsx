import React, { useState } from "react";
import { DatePicker, Button, Row, Col, Select } from "antd";
import "./style.scss";

const { Option } = Select;

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numGuests, setNumGuests] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  // const [availableRooms, setAvailableRooms] = useState([]);

  const handleCheckAvailable = () => {};

  const handleReset = () => {
    setCheckInDate(null);
    setCheckOutDate(null);
    setNumGuests(1);
    setNumChildren(0);
    // setAvailableRooms([]);
  };

  const handleNumGuestsChange = (value) => {
    setNumGuests(value);
  };

  const handleNumChildrenChange = (value) => {
    setNumChildren(value);
  };

  return (
    <div className="booking-container">
      <div className="booking-container__form">
        <div className="booking-container__form-input">
          <Row>
            <Col span={12} sm={6}>
              <div className="booking-container__form-label">
                <label>Chọn ngày đến: </label>
                <DatePicker
                  value={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholder="Ngày đến"
                />
              </div>
            </Col>
            <Col span={12} sm={6}>
              <div className="booking-container__form-label">
                <label>Chọn ngày đi: </label>
                <DatePicker
                  value={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholder="Ngày đi"
                />
              </div>
            </Col>
            <Col span={12} sm={4}>
              <div className="booking-container__form-label">
                <label>Số khách: </label>
                <Select
                  value={numGuests}
                  onChange={handleNumGuestsChange}
                  placeholder="Số khách"
                  maxTagCount={1}
                  maxTagTextLength={3}
                  maxTagPlaceholder={`+${numGuests - 10}`}
                >
                  {[...Array(10)].map((_, index) => (
                    <Option key={index + 1} value={index + 1}>
                      {index + 1}
                    </Option>
                  ))}
                </Select>
              </div>
            </Col>
            <Col span={12} sm={4}>
              <div className="booking-container__form-label">
                <label>Số trẻ em: </label>
                <Select
                  value={numChildren}
                  onChange={handleNumChildrenChange}
                  placeholder="Số trẻ em"
                  maxTagCount={1}
                  maxTagTextLength={3}
                  maxTagPlaceholder={`+${numChildren - 5}`}
                >
                  {[...Array(6)].map((_, index) => (
                    <Option key={index} value={index}>
                      {index}
                    </Option>
                  ))}
                </Select>
              </div>
            </Col>
          </Row>
        </div>

        <div className="booking-container__form-group-btn">
          <Button
            type="primary"
            onClick={handleCheckAvailable}
            style={{ backgroundColor: "rgb(142, 0, 0)" }}
          >
            Check available
          </Button>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
