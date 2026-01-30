import React, { useState } from "react";
import { Card, Row, Col, Typography, Flex } from "antd";
import BannerDes from "./BannerDes";

const { Text } = Typography;

const data = [
  {
    title: "Little Krazy",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  },
  {
    title: "Hawanım Groves City",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    title: "Picnic Market",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  },
  {
    title: "Lucawood",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
];

const ScrollCards = ({ inline, slide }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        padding: "40px 16px",
        background: "#2A3600",
        overflow: "hidden",
      }}
    >
      <Flex
        vertical={!inline}
        gap={32}
        align="center"
        justify="center"
      >
        {/* Banner */}
        <div
          style={{
            width: "100%",
            maxWidth: inline ? 400 : 1000,
          }}
        >
          <BannerDes
            buttonText={slide.description}
            slideTittle={slide.title}
          />
        </div>

        {/* Cards */}
        <Row
          justify="center"
          gutter={[16, 24]}
          wrap
          style={{ width: "100%" }}
        >
          {data.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={8}
                lg={6}
              >
                <Card
                  style={{ backgroundColor: "#2A3600" }}
                  hoverable
                  bordered={false}
                  cover={
                    <img
                      src={item.image}
                      alt={item.title}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        width: "100%",
                        height: 380,
                        objectFit: "cover",
                        borderRadius: 20,
                        transition: "all 0.3s ease",
                        transform: isHovered
                          ? "scale(0.95)"
                          : "scale(1)",
                        boxShadow: isHovered
                          ? "0 12px 30px rgba(0,0,0,0.6)"
                          : "0 4px 12px rgba(0,0,0,0.2)",
                      }}
                    />
                  }
                  bodyStyle={{ display: "none" }}
                />

                <Text
                  style={{
                    display: "block",
                    marginTop: 12,
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  {item.title}
                </Text>
              </Col>
            );
          })}
        </Row>
      </Flex>
    </div>
  );
};

export default ScrollCards;
