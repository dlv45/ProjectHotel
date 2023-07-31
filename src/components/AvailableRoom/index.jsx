import "./style.scss";
import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import room1 from "../../images/room1.jpg";
import RoomPopup from "../RoomPopUp";

const AvailableRoom = () => {
  const borderStyle = {
    border: "1px solid #ccc",
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="available-room">
      <Row>
        <Col span={24} sm={7}>
          <img
            src={room1}
            alt="Phòng khách sạn"
            className="available-room__img"
          />
        </Col>
        <Col span={24} sm={10} style={borderStyle}>
          <div className="available-room__details">
            <div className="available-room__title">
              <h2>Phòng Deluxe</h2>
            </div>
            <div className="available-room__description">
              <div>
                <p>Số khách: 2</p>
                <p>Chiều dài giường: 2m</p>
              </div>
              <i>
                Chú ý: Giá trên đã bao gồm phí VAT. Nếu ở ghép thêm 1 người,
                khách sạn phụ thu thêm 100.000 VND/khách.
              </i>
            </div>
          </div>
        </Col>
        <Col
          span={24}
          sm={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "10px",
          }}
        >
          <div className="available-room__price">
            <div className="available-room__title">
              <h2 style={{ marginLeft: "-2%" }}>500,000VND/ĐÊM</h2>
            </div>
          </div>
          <div className="available-room__group-btn">
            <Button
              type="primary"
              style={{ backgroundColor: "rgb(142, 0, 0)" }}
            >
              Đặt Phòng
            </Button>
            <Button
              type="primary"
              style={{ backgroundColor: "rgb(142, 0, 0)" }}
              onClick={showModal}
            >
              Xem Chi Tiết
            </Button>
          </div>
        </Col>
      </Row>
      <RoomPopup
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        roomImage={room1}
      />
    </div>
  );
};

export default AvailableRoom;
