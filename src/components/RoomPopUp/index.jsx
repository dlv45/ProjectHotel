import React from "react";
import { Modal, Row, Col, Divider, Carousel } from "antd";
import "./style.scss";

const RoomPopup = ({ isModalVisible, handleOk, handleCancel, roomImage }) => {
  return (
    <Modal
      title="Chi Tiết Phòng Deluxe"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={"80%"}
      className="room-popup"
    >
      <Row>
        <Col span={16}>
          <div className="room-popup__image">
            <Carousel autoplay>
              <div>
                <img src={roomImage} alt="Phòng khách sạn" />
              </div>
              <div>
                <img src={roomImage} alt="Phòng khách sạn" />
              </div>
              <div>
                <img src={roomImage} alt="Phòng khách sạn" />
              </div>
              <div>
                <img src={roomImage} alt="Phòng khách sạn" />
              </div>
              {/* Thêm các hình ảnh khác vào đây nếu cần */}
            </Carousel>
          </div>
        </Col>

        <Col span={8}>
          <div className="room-popup__description">
            <div className="room-popup__description-content">
              <h2>Thông tin chi tiết phòng</h2>
              <p>Số khách: 2</p>
              <p>Chiều dài giường: 2m</p>
              <i>
                Chú ý: Giá trên đã bao gồm phí VAT. Nếu ở ghép thêm 1 người,
                khách sạn phụ thu thêm 100.000 VND/khách.
              </i>
            </div>
            <Divider />
            <div>
              <span
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <i>Giá phòng:</i>
                <p>500.000vnđ/Đêm</p>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default RoomPopup;
