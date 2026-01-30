import React from "react";
import {
  Typography,
  Layout,
  Flex,
  Image,
  Button
} from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const CommonDes = ({vedio , title , description}) => {
  return (
    <Layout style={{ background: "#2a3600" }}>
      <Content>

        {/* HERO */}
        <Flex
          vertical
          align="center"
          style={{
            padding: "90px 20px 70px",
            background: "#2f3c00",
          }}
        >
          <Title style={{ color: "#fff" }}>
            {title}
          </Title>

          <Paragraph
            style={{
              maxWidth: 760,
              textAlign: "center",
              color: "#d9d9d9",
            }}
          >
            {description}
          </Paragraph>
        </Flex>

        {/* VIDEO SECTION */}
        {vedio && 
        <Flex justify="center" style={{ paddingBottom: 80 }}>
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: 1100,
              border: "8px solid #f0c000",
            }}
          >
            {/* IMAGE */}
            <Image
              preview={false}
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              height={520}
              width="100%"
              style={{ objectFit: "cover" }}
            />

            {/* PLAY BUTTON (CENTER OVER IMAGE) */}
            <Button
              type="primary"
              shape="circle"
              size="large"
              icon={<CaretRightOutlined />}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* HEADING (BOTTOM OVER IMAGE) */}
            <Title
              level={2}
              style={{
                position: "absolute",
                bottom: 30,
                left: "50%",
                transform: "translateX(-50%)",
                margin: 0,
                color: "#b6ff3b",
              }}
            >
              The Groves
            </Title>
          </div>
        </Flex>}

      </Content>
    </Layout>
  );
};

export default CommonDes;
