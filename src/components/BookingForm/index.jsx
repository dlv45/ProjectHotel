import React from "react";
import { DatePicker, Button, Row, Col, Select } from "antd";
import "./style.scss";

const { Option } = Select;

const BookingForm = () => {
  const { RangePicker } = DatePicker;
  const handleCheckAvailable = () => {};

  const handleNumGuestsChange = (value) => {
    // setNumGuests(value);
  };

  return (
    <div className="booking-container">
      <div className="booking-container__form">
        <div className="booking-container__form-input">
          <Row>
            <Col span={24} sm={10}>
              <div className="booking-container__form-label">
                <label>Chọn ngày : </label>
                <RangePicker />
              </div>
            </Col>

            <Col span={12} sm={6}>
              <div className="booking-container__form-label">
                <label>Số khách: </label>
                <Select
                  onChange={handleNumGuestsChange}
                  placeholder="Số khách"
                  maxTagCount={1}
                  maxTagTextLength={3}
                  maxTagPlaceholder={`+${-10}`}
                >
                  {[...Array(10)].map((_, index) => (
                    <Option key={index + 1} value={index + 1}>
                      {index + 1}
                    </Option>
                  ))}
                </Select>
              </div>
            </Col>
            <Col span={12} sm={8}>
              <div className="booking-container__form-group-btn">
                <Button
                  type="primary"
                  onClick={handleCheckAvailable}
                  style={{ backgroundColor: "rgb(142, 0, 0)" }}
                >
                  Check available
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
