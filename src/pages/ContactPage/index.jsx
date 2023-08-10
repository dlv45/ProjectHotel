import React from "react";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./style.scss";
import { Row, Col, Divider } from "antd";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <div className="contact-page-container__info">
            <div className="contact-page-container__info-title">
              <h1>HUE CORNER HOUSE</h1>
            </div>
            <div className="contact-page-container__info-add">
              <EnvironmentOutlined /> 74A Tue Tinh St, Thuan Hoa Ward, Hue City,
              Viet Nam
            </div>
            <div className="contact-page-container__info-map">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3826.368043318994!2d107.5819962!3d16.4568914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a153d1067a0b%3A0xa2eccfd62c55933e!2sHue%20Corner%20House!5e0!3m2!1svi!2s!4v1691599595720!5m2!1svi!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div className="contact-page-container__contact">
            <div className="contact-page-container__contact-title">
              <h1>THÔNG TIN LIÊN HỆ</h1>
            </div>
            <Divider />
            <div className="contact-page-container__contact-content">
              <div className="contact-page-container__contact-content-item">
                <PhoneOutlined /> <b>Phone Number: </b> 0908515522 - 0908136090
              </div>
              <div className="contact-page-container__contact-content-item">
                <FacebookOutlined /> <b>Fanpage: </b>
                <a href="/#"> Fanpage Hue Corner House</a>
              </div>
              <div className="contact-page-container__contact-content-item">
                <MailOutlined /> <b>Email: </b> huecornerhouse@gmail.com
              </div>
            </div>
            <div className="contact-page-container__contact-fb">
              <div className="facebook-iframe-wrapper">
                <iframe
                  title="Facebook Fanpage"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHuecorner.house&tabs=timeline&width=500&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="450"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
