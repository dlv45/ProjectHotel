import React from "react";
import "./style.scss";
import bannerIntro from "../../images/banner-introduce.png";
import intro1 from "../../images/introduce1.jpg";
import intro2 from "../../images/introduce2.jpg";
import intro3 from "../../images/introduce3.jpg";
import intro7 from "../../images/introduce7.jpg";
import intro4 from "../../images/introduce4.jpg";
import intro5 from "../../images/introduce5.jpg";
import intro6 from "../../images/introduce6.jpg";
import { Col } from "antd";

const IntroducePage = () => {
  return (
    <div className="introduce-page-container">
      <div className="introduce-page-container__banner">
        <img
          src={bannerIntro}
          className="home-page-container__banner-img"
          alt="banner"
        />
      </div>
      <div className="introduce-page-container__img">
        <Col span={24} sm={16}>
          <div className="introduce-page-container__img-cover">
            <img
              src={intro1}
              className="introduce-page-container__intro-img"
              alt="introduce1"
            />
            <div className="introduce-page-container__text-cover">
              <i>
                Hue Corner House được thiết kế với kiến trúc sân vườn hiện đại
                với những chi tiết được chăm chút tỉ mỉ.
              </i>
            </div>
          </div>
        </Col>
        <Col span={24} sm={8}>
          <img
            src={intro2}
            className="introduce-page-container__intro-img"
            alt="introduce1"
            style={{ height: "88%" }}
          />
        </Col>
      </div>
      <div className="introduce-page-container__img">
        <Col span={24} sm={8}>
          <div className="introduce-page-container__text">
            <span>
              <b> Hue Corner House</b> có khu vườn xanh mát và sân thượng tuyệt
              đẹp, nơi bạn có thể thư giãn sau một ngày khám phá thành phố.
            </span>
          </div>
        </Col>
        <Col span={24} sm={16}>
          <img
            src={intro3}
            className="introduce-page-container__intro-img"
            alt="introduce1"
          />
        </Col>
      </div>
      <div className="introduce-page-container__text">
        <span>
          Với vị trí đắc địa ở cả 2 cơ sở, <b> Hue Corner House</b> cho phép
          khách hàng dễ dàng di chuyển đến các điểm tham quan nổi tiếng như Đại
          Nội, Chùa Thiên Mụ, Hoàng thành Huế và nhiều điểm đến khác trong thành
          phố. Đặc biệt, cơ sở 3 của <b> Hue Corner House</b> còn cung cấp dịch
          vụ phòng họp, giúp cho khách hàng có thể tổ chức các cuộc họp, đàm
          phán và sự kiện một cách thuận tiện và hiệu quả.
        </span>
      </div>
      <div className="introduce-page-container__img">
        <Col span={12} sm={6}>
          <img
            src={intro7}
            className="introduce-page-container__intro-img"
            alt="introduce1"
          />
        </Col>
        <Col span={12} sm={6}>
          <img
            src={intro4}
            className="introduce-page-container__intro-img"
            alt="introduce1"
          />
        </Col>
        <Col span={12} sm={6}>
          <img
            src={intro5}
            className="introduce-page-container__intro-img"
            alt="introduce1"
          />
        </Col>
        <Col span={12} sm={6}>
          <img
            src={intro6}
            className="introduce-page-container__intro-img"
            alt="introduce1"
          />
        </Col>
      </div>
      <div className="introduce-page-container__text-end">
        <span>
          <b> Hue Corner House</b> - được xây dựng theo hướng Đông Nam. Diện
          tích 250m2 - 3 Tầng. Có sân thượng view Vincom, có thể Set BBQ ngoài
          trời. Bãi đỗ oto tận sân. Phòng ngủ đầy đủ tiện nghi tiêu chuẩn khách
          sạn, lót sàn gỗ, đầy nắng và gió.
        </span>
        <span>
          <b> Hue Corner House</b> là một điểm đến tuyệt vời cho những ai muốn
          tìm kiếm một kỳ nghỉ thoải mái, tiện nghi và đầy đủ các tiện ích hiện
          đại. Với không gian thoáng đãng, sân vườn xanh mát, phòng ngủ sang
          trọng và vị trí đắc địa, Hue Corner House chắc chắn sẽ mang đến cho
          khách hàng những trải nghiệm tuyệt vời.
        </span>
      </div>
    </div>
  );
};

export default IntroducePage;
