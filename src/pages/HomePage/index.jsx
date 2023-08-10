/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.scss";
import { Button, Col, Row } from "antd";
import banner from "../../images/banner-home.jpg";
import promo1 from "../../images/promo1.png";
import hotel from "../../images/hotel-image.jpg";
import promo2 from "../../images/promo2.png";
import promo3 from "../../images/promo3.png";
import room1 from "../../images/room1.jpg";
import room2 from "../../images/room2.jpg";
import room3 from "../../images/room3.jpg";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-container__banner">
        <img src={banner} className="home-page-container__banner-img" />
      </div>
      <div className="home-page-container__section">
        <div className="home-page-container__section__intro">
          <Row>
            <Col span={24} sm={12}>
              <img
                src={hotel}
                className="home-page-container__section__intro-img"
              />
            </Col>
            <Col span={24} sm={12}>
              <div className="home-page-container__section__intro-content">
                <div className="home-page-container__section__intro-content-title">
                  <h2>HUE CORNER HOUSE</h2>
                </div>
                <div className="home-page-container__section__intro-content-des">
                  <div>
                    Hue Corner House nơi mang lại cho khách hàng sự thoải mái,
                    tiện nghi, Với không gian rộng rãi và thoáng đãng, Hue
                    Corner House tạo ra một cảm giác thư thái cho khách hàng sau
                    một ngày dài tham quan. Một trong những tiện nghi nổi bật
                    của Hue Corner House là sân vườn xanh mát, đầy cây cối và
                    hoa lá, giúp khách hàng có được một không gian sống trong
                    lành, gần gũi với thiên nhiên.Du khách có thể vừa uống trà
                    tâm tình cùng người thân, vừa tận hưởng không gian trong
                    lành, mộng mơ xứ Huế. Bên cạnh đó, các phòng ngủ cũng được
                    thiết kế đẹp mắt và sang trọng, giúp cho khách hàng có một
                    giấc ngủ ngon và tràn đầy năng lượng. Tất cả các phòng đều
                    được trang bị đầy đủ tiện nghi hiện đại như máy điều hòa,
                    tivi, tủ lạnh và khu vực tiếp khách.
                  </div>
                  <div>
                    Với vị trí đắc địa ở cả 3 cơ sở, Hue Corner House cho phép
                    khách hàng dễ dàng di chuyển đến các điểm tham quan nổi
                    tiếng như Đại Nội, Chùa Thiên Mụ, Hoàng thành Huế và nhiều
                    điểm đến khác trong thành phố. Đặc biệt, cơ sở 3 của Hue
                    Corner House còn cung cấp dịch vụ phòng họp, giúp cho khách
                    hàng có thể tổ chức các cuộc họp, đàm phán và sự kiện một
                    cách thuận tiện và hiệu quả.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="home-page-container__section__promo">
          <div className="home-page-container__section__promo-title">
            <h2>ƯU ĐÃI DÀNH CHO BẠN</h2>
          </div>
          <div className="home-page-container__section__promo-main-item">
            <Row>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__promo-item">
                  <img
                    src={promo1}
                    className="home-page-container__section__promo-item-img"
                  />
                  <div className="home-page-container__section__promo-item-content">
                    ƯU ĐÃI 3 NGÀY 2 ĐÊM
                  </div>
                </div>
              </Col>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__promo-item">
                  <img
                    src={promo2}
                    className="home-page-container__section__promo-item-img"
                  />
                  <div className="home-page-container__section__promo-item-content">
                    ƯU ĐÃI 10% DÀNH CHO HỌC SINH - SINH VIÊN
                  </div>
                </div>
              </Col>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__promo-item">
                  <img
                    src={promo3}
                    className="home-page-container__section__promo-item-img"
                  />
                  <div className="home-page-container__section__promo-item-content">
                    ƯU ĐÃI 20% GIÁ PHÒNG KHI THUÊ THEO TUẦN
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="home-page-container__section__service">
          <div className="home-page-container__section__service-title">
            <h2>LOẠI PHÒNG</h2>
          </div>
          <div className="home-page-container__section__service-main-item">
            <Row>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__service-item">
                  <img
                    src={room1}
                    className="home-page-container__section__service-item-img"
                  />
                  <div className="home-page-container__section__service-item-content">
                    STARDARD ROOM
                  </div>
                </div>
              </Col>

              <Col span={24} sm={8}>
                <div className="home-page-container__section__service-item">
                  <img
                    src={room2}
                    className="home-page-container__section__service-item-img"
                  />
                  <div className="home-page-container__section__service-item-content">
                    SUPERIOR ROOM
                  </div>
                </div>
              </Col>

              <Col span={24} sm={8}>
                <div className="home-page-container__section__service-item">
                  <img
                    src={room3}
                    className="home-page-container__section__service-item-img"
                  />
                  <div className="home-page-container__section__service-item-content">
                    DELUXE ROOM
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="home-page-container__section__utilities">
          <div className="home-page-container__section__utilities-title">
            <h2>TIỆN ÍCH TẠI KHÁCH SẠN</h2>
          </div>
          <div className="home-page-container__section__utilities-main-item">
            <Row>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__utilities-item"></div>
              </Col>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__utilities-item"></div>
              </Col>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__utilities-item"></div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="home-page-container__section__service">
          <div className="home-page-container__section__service-title">
            <h2>ĐỊA CHỈ CÁC CƠ SỞ</h2>
          </div>
          <div className="home-page-container__section__service-main-item">
            <Row>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__address-item">
                  <h3>CƠ SỞ 1</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3826.368043318994!2d107.5819962!3d16.4568914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a153d1067a0b%3A0xa2eccfd62c55933e!2sHue%20Corner%20House!5e0!3m2!1svi!2sus!4v1689584509647!5m2!1svi!2sus"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="home-page-container__section__address-map"
                  ></iframe>

                  <a
                    href="https://www.google.com/maps/dir//74A+Tu%E1%BB%87+T%C4%A9nh,+Thu%E1%BA%ADn+H%C3%B2a,+Th%C3%A0nh+ph%E1%BB%91+Hu%E1%BA%BF,+Th%E1%BB%ABa+Thi%C3%AAn+Hu%E1%BA%BF/@16.4721607,107.5327727,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3141a6d2ad6fc3cd:0x624e3d7a74173bc7!2m2!1d107.5740583!2d16.4721647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button style={{ margin: "10px" }}>Đường đi</Button>
                  </a>
                </div>
              </Col>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__address-item">
                  <h3>CƠ SỞ 2</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3826.368043318994!2d107.5819962!3d16.4568914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a153d1067a0b%3A0xa2eccfd62c55933e!2sHue%20Corner%20House!5e0!3m2!1svi!2sus!4v1689584509647!5m2!1svi!2sus"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="home-page-container__section__address-map"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/dir//74A+Tu%E1%BB%87+T%C4%A9nh,+Thu%E1%BA%ADn+H%C3%B2a,+Th%C3%A0nh+ph%E1%BB%91+Hu%E1%BA%BF,+Th%E1%BB%ABa+Thi%C3%AAn+Hu%E1%BA%BF/@16.4721607,107.5327727,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3141a6d2ad6fc3cd:0x624e3d7a74173bc7!2m2!1d107.5740583!2d16.4721647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button style={{ margin: "10px" }}>Đường đi</Button>
                  </a>
                </div>
              </Col>
              <Col span={24} sm={8}>
                <div className="home-page-container__section__address-item">
                  <h3>CƠ SỞ 3</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3826.368043318994!2d107.5819962!3d16.4568914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a153d1067a0b%3A0xa2eccfd62c55933e!2sHue%20Corner%20House!5e0!3m2!1svi!2sus!4v1689584509647!5m2!1svi!2sus"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="home-page-container__section__address-map"
                  ></iframe>

                  <a
                    href="https://www.google.com/maps/dir//74A+Tu%E1%BB%87+T%C4%A9nh,+Thu%E1%BA%ADn+H%C3%B2a,+Th%C3%A0nh+ph%E1%BB%91+Hu%E1%BA%BF,+Th%E1%BB%ABa+Thi%C3%AAn+Hu%E1%BA%BF/@16.4721607,107.5327727,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3141a6d2ad6fc3cd:0x624e3d7a74173bc7!2m2!1d107.5740583!2d16.4721647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button style={{ margin: "10px" }}>Đường đi</Button>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
