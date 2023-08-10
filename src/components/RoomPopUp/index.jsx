import React from "react";
import { Modal, Row, Col, Divider, Carousel, Button } from "antd";
import "./style.scss";
import { formatNumber } from "../../utils/formatNumber";

const RoomPopup = ({ isModalVisible, handleBooking, handleCancel, room }) => {
  console.log(room.imgs, "abc");
  return (
    <Modal
      title="Chi Tiết Phòng Deluxe"
      open={isModalVisible}
      onCancel={handleCancel}
      width={"80%"}
      className="room-popup"
      footer={[
        <div>
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleBooking}
            style={{ backgroundColor: "rgb(142, 0, 0)" }}
          >
            Đặt Phòng
          </Button>
        </div>,
      ]}
    >
      <Row>
        <Col span={16}>
          <div className="room-popup__image">
            <Carousel autoplay>
              {room.imgs.map((image) => (
                <div>
                  <img src={image} alt="Phòng khách sạn" />
                </div>
              ))}
            </Carousel>
          </div>
        </Col>

        <Col span={8}>
          <div className="room-popup__description">
            <div className="room-popup__description-content">
              <h2>Thông tin chi tiết phòng</h2>
              <p>Số khách: {room.guest}</p>
              <p>Chiều dài giường: {room.bed}</p>
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
                <p>{formatNumber(room.price)}VNĐ/đêm</p>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default RoomPopup;
