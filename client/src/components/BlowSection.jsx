import React from "react";
import { Row, Col, Typography, Space } from "antd";

const { Title, Text } = Typography;

const BlowSection = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "radial-gradient(circle at top left, #233013, #0b1207)",
        padding: "80px 60px",
        boxSizing: "border-box",
        color: "#ffffff",
      }}
    >
      {/* TOP SECTION */}
      <Row
        justify="space-between"
        align="top"
        style={{
          maxWidth: "1400px",
          margin: "0 auto 60px auto",
        }}
      >
        <Col xs={24} md={14}>
          <Title
            style={{
              color: "#ffffff",
              fontSize: "44px",
              fontWeight: 400,
              lineHeight: "1.2",
              maxWidth: "520px",
            }}
          >
            Join us for an
            <br />
            unforgettable experience
          </Title>
        </Col>

        <Col
          xs={24}
          md={10}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <Space size={16}>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              style={{ height: "40px", cursor: "pointer" }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ height: "40px", cursor: "pointer" }}
            />
          </Space>
        </Col>
      </Row>

      {/* INFO SECTION */}
      <Row
        gutter={[40, 40]}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* LOCATION */}
        <Col xs={24} md={8}>
          <Text style={{ color: "#ffffff", letterSpacing: "2px", fontSize: "12px" }}>
            LOCATION
          </Text>
          <div style={{ marginTop: "16px", lineHeight: "1.8" }}>
            <Text style={{ display: "block", color: "#ffffff" }}>Al-Hizam Park</Text>
            <Text style={{ display: "block", color: "#ffffff" }}>
              Al-Semairi, Yanbu Al Bahr 46455
            </Text>
            <Text style={{ display: "block", color: "#ffffff" }}>
              Riyadh Saudi Arabia
            </Text>
          </div>
        </Col>

        {/* WORKING HOURS */}
        <Col xs={24} md={8}>
          <Text style={{ color: "#ffffff", letterSpacing: "2px", fontSize: "12px" }}>
            WORKING HOURS
          </Text>
          <div style={{ marginTop: "16px", lineHeight: "1.8" }}>
            <Text style={{ display: "block", color: "#ffffff" }}>
              Sun until Thurs: 4:00PM
            </Text>
            <Text style={{ display: "block", color: "#ffffff" }}>
              Fri & Sat: 2:30PM
            </Text>

            <div style={{ marginTop: "12px" }}>
              <Text style={{ display: "block", color: "#ffffff" }}>
                Gates Close at:
              </Text>
              <Text style={{ display: "block", color: "#ffffff" }}>
                Sat until Wed: 12:00AM
              </Text>
              <Text style={{ display: "block", color: "#ffffff" }}>
                Thu & Fri: 12:30AM
              </Text>
            </div>
          </div>
        </Col>

        {/* GUEST SERVICE */}
        <Col xs={24} md={8}>
          <Text style={{ color: "#ffffff", letterSpacing: "2px", fontSize: "12px" }}>
            GUEST SERVICE CALL
          </Text>
          <div style={{ marginTop: "16px", lineHeight: "1.8" }}>
            <Text style={{ display: "block", color: "#ffffff" }}>
              cc@thegroves-sa.com
            </Text>
            <Text style={{ display: "block", color: "#ffffff" }}>920001672</Text>
            <Text style={{ display: "block", color: "#ffffff" }}>
              +966556631309
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlowSection;
