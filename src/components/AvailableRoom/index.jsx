import React from "react";
import { Row, Col, Button } from "antd";
import "./style.scss";
import { formatNumber } from "../../utils/formatNumber";

const AvailableRoom = ({ room, onShowPopup }) => {
  const borderStyle = {
    border: "1px solid #ccc",
  };

  return (
    <div className="available-room">
      <Row>
        <Col span={24} sm={7}>
          <img
            src={room.thumnail}
            alt={room.name}
            className="available-room__img"
          />
        </Col>
        <Col span={24} sm={10} style={borderStyle}>
          <div className="available-room__details">
            <div className="available-room__title">
              <h2>{room.name}</h2>
            </div>
            <div className="available-room__description">
              <div>
                <p>Số khách: {room.guest}</p>
                <p>Chiều dài giường: {room.bed}</p>
              </div>
              <i>{room.description}</i>
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
              <h2 style={{ marginLeft: "-2%" }}>
                {formatNumber(room.price)}VNĐ/đêm
              </h2>
            </div>
          </div>
          <div className="available-room__group-btn">
            <Button
              type="primary"
              style={{ backgroundColor: "rgb(142, 0, 0)" }}
            >
              Đặt phòng
            </Button>
            <Button
              type="primary"
              style={{ backgroundColor: "rgb(142, 0, 0)" }}
              onClick={onShowPopup}
            >
              Xem Chi Tiết
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AvailableRoom;
