import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import palceimage from "../assets/images/palceimage.png";


const { Title, Text } = Typography;

const FindYourPlace = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#2A3600",
        padding: "80px 60px",
        boxSizing: "border-box",
      }}
    >
      <Row
        align="middle"
        justify="space-between"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* LEFT IMAGE */}
        <Col
          xs={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={palceimage}
            alt="Map"
            style={{
              width: "100%",
              maxWidth: "520px",
              borderRadius: "8px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            }}
          />
        </Col>

        {/* RIGHT CONTENT */}
        <Col
          xs={24}
          md={10}
          style={{
            paddingLeft: "40px",
            color: "#ffffff",
          }}
        >
          <Text
            style={{
              letterSpacing: "2px",
              color: "#c6d1b3",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            Experience the Groves
          </Text>

          <Title
            level={1}
            style={{
              color: "#ffffff",
              marginTop: "16px",
              marginBottom: "16px",
              fontSize: "48px",
              fontWeight: 500,
            }}
          >
            Find your place
          </Title>

          <Text
            style={{
              color: "#cfd6c3",
              fontSize: "16px",
              lineHeight: "1.8",
              display: "block",
              maxWidth: "420px",
              marginBottom: "32px",
            }}
          >
            Our interactive map will show you the way to the shops and
            restaurants that you want to see.
          </Text>

          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            style={{
              backgroundColor: "#c9a86a",
              borderColor: "#c9a86a",
              height: "48px",
              padding: "0 28px",
              fontSize: "16px",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Open the Map
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FindYourPlace;