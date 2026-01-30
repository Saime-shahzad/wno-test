import React from "react";
import { Row, Col, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import zulu from "../assets/images/zulu.png";
import ambiance from "../assets/images/ambiance.png";
import khwaja from "../assets/images/khwaja.png";
import horseBg from "../assets/images/horseBg.png";
import Buttons from "./Buttons";


const { Text } = Typography;

const data = [
  {
    title: "Vida Vera",
    price: "100 SR PER GUEST",
    image: ambiance,
  },
  {
    title: "Zama Zulu",
    price: "100 SR PER GUEST",
    image: zulu,
  },
  {
    title: "Khajeh",
    price: "100 SR PER GUEST",
    image: khwaja,
  },
  {
    title: "Another Place",
    price: "100 SR PER GUEST",
    image: horseBg,
  },
];

const ExperienceCards = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#2A3600",
        padding: "80px 60px",
        boxSizing: "border-box",
      }}
    >
      <Row
        gutter={[32, 32]}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {data.map((item, index) => (
          <Col xs={24} md={12} key={index}>
            <div
              style={{
                backgroundColor: "#2A3600",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              {/* CONTENT */}
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: "20px",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </Text>

                 
                  <Buttons buttonText={item.price} arrowVisible={true} />
                </div>

                
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExperienceCards;