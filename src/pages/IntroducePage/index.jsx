import React from "react";
import { Row, Col, Card } from "antd";
import "./style.scss";

const Main = () => {
  return (
    <main className="main">
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="gallery-section">
        <h2>Gallery</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              className="gallery-card"
              cover={
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Gallery 1"
                />
              }
            >
              <Card.Meta title="Gallery 1" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              className="gallery-card"
              cover={
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Gallery 2"
                />
              }
            >
              <Card.Meta title="Gallery 2" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              className="gallery-card"
              cover={
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Gallery 3"
                />
              }
            >
              <Card.Meta title="Gallery 3" />
            </Card>
          </Col>
          {/* Add more gallery cards */}
        </Row>
      </section>
    </main>
  );
};

export default Main;
