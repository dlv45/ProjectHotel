/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Col, Row } from "antd";
import React from "react";
import "./style.scss";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FacebookOutlined, GlobalOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col span={24} sm={8}>
          <div className="footer__item">
            <div className="footer__logo">
              <img src={logo} className="footer__logo-img" />
              <div className="footer__logo-text">Safe - Eco - Comfortable</div>
            </div>
          </div>
        </Col>

        <Col span={24} sm={8}>
          <div className="footer__item">
            <div className="footer__title">
              <h2>INFORMATION</h2>
            </div>
            <ul className="footer__list">
              <li>
                <p>
                  <strong style={{ marginRight: "5px" }}>
                    <FontAwesomeIcon icon={faPhone} />
                  </strong>
                  <b>Phone:</b> 0908515522 - 0908136090
                </p>
              </li>
              <li>
                <p>
                  <strong style={{ marginRight: "5px" }}>
                    <FontAwesomeIcon icon={faMapLocationDot} />
                  </strong>
                  <b>Head office:</b> 74A Tue Tinh St, Thuan Hoa Ward, Hue City,
                  VietNam
                </p>
              </li>
              <li>
                <p>
                  <strong style={{ marginRight: "5px" }}>
                    <FacebookOutlined />
                  </strong>
                  <a href="">Fanpage Hue Corner House</a>
                </p>
              </li>
              <li>
                <p>
                  <strong style={{ marginRight: "5px" }}>
                    <GlobalOutlined />
                  </strong>
                  <a href="/">huecorner.asia</a>
                </p>
              </li>
            </ul>
          </div>
        </Col>

        <Col span={24} sm={8}>
          <div className="footer__item">
            <div className="footer__title">
              <h2>TERMS AND CONDITIONS</h2>
            </div>
            <ul className="footer__list">
              <li>
                <p>Quy định của dịch vụ</p>
              </li>
              <li>
                <p>Điều khoản và điều kiện</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
