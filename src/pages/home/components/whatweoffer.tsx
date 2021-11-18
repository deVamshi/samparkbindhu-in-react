import React from "react";
import Title from "../../../components/title";

import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/what-we-do-img-2.jpg";
import vikasLogo from "../../../assets/images/vikas-logo.jpg";
import engageLogo from "../../../assets/images/engage-logo.jpg";

import { Typography } from "antd";
import { Row, Col, Image } from "antd";

const { Title: AntTitle, Paragraph } = Typography;

export default function whatweoffer() {
  return (
    <div className="contact-wrapper container-fluid" id="whatweoffer">
      <Title title={"What We Offer"} />

      <Row gutter={36} align="middle">
        <Col span={12}>
          <Image preview={false} src={image1} width={"93.17%"} />
        </Col>
        <Col span={12}>
          <Row align="middle" justify="start">
            <Col>
              <img src={vikasLogo} style={{ display: "inline" }}  alt=""/>
            </Col>
            <Col flex={"auto"}>
              <AntTitle
                level={1}
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                VikasBandhu
              </AntTitle>
            </Col>
          </Row>

          <div style={{ padding: "40px" }}>
            <div style={{ textAlign: "start" }}>
              <AntTitle level={4} style={{ color: "#e6b31e" }}>
                Today
              </AntTitle>
              <Paragraph style={{ fontSize: "16px" }}>
                There is a large disparity in price of produce between farmer
                and retail. The overheads associated with Supply Chain,
                Transport, Wastage, Storage, packing, seasonal vagaries add up
                the costs. The outcome results in high disparity with low prices
                to the farmer and high prices to the end consumer. Government
                policies were recently amended to allow direct selling of
                produce. Adoption is however very limited.
              </Paragraph>
              <AntTitle level={4} style={{ color: "#e6b31e" }}>
                Philosophy
              </AntTitle>
              <Paragraph
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "1.7em",
                }}
              >
                Attempts to deal with this constraints from multiple dimensions
                <ul style={{}}>
                  <li>
                    Create a new efficient, optimized technology driven market
                    place
                  </li>
                  <li>
                    Enable the farmer with the best price for his produce.
                  </li>
                  <li>
                    Boosting Rural economy by providing local employment to
                    youth in all districts in Karnataka
                  </li>
                  <li>
                    VikasBandhu would be single point to provide all the local
                    support to the farmers from sow to sell
                  </li>
                  <li>
                    VikasBandhu would provide the right linkage to the buyer for
                    getting the produce at the most efficient price.
                  </li>
                  <li>Enable a Win Win for Both the farmer and the buyer</li>
                </ul>
                Visit at:{" "}
                <a href="https://vikasbandhu.in/" >
                  <strong> vikasbandhu.in</strong>
                </a>
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={36} align="middle">
        <Col span={12}>
          <Row align="middle" justify="start">
            <Col>
              <img src={engageLogo} style={{ display: "inline" }} alt="logo" />
            </Col>
            <Col flex={"auto"}>
              <AntTitle
                level={1}
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                Engage All
              </AntTitle>
            </Col>
          </Row>

          <div style={{ padding: "40px" }}>
            <div style={{ textAlign: "start" }}>
              <AntTitle level={4} style={{ color: "#e6b31e" }}>
                Today
              </AntTitle>
              <Paragraph style={{ fontSize: "16px" }}>
                In the Covid era, many challenges have been posed like never
                before. The biggest one is need to have virtual connects for
                people in their personal and professional needs even after the
                pandemic ends.
              </Paragraph>
              <AntTitle level={4} style={{ color: "#e6b31e" }}>
                Philosophy
              </AntTitle>
              <Paragraph
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "1.7em",
                }}
              >
                We want to build a new platform that is simple, smart and easy
                for people to adapt to. EngageAll, therefore, aims to blur these
                lines and make people connect through web conferencing.
                understands the needs of connecting people across spectrum and
                thus, the basic features are provided free and also experience
                additional features that are available on subscription. The
                platform also provides elbow room to customise/integrate to suit
                specific requirements of certain groups.
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <Image preview={false} src={image2} width={"93.17%"} />
        </Col>
      </Row>

      {/* <div className="contact">
        <div className="contact-details">
          <div className="contact-item">
            <img src="./Rectangle 12.png" alt="" />
          </div>
        </div>
        <div>
          <img src="./vksb 1.png" alt="" />
        </div>
      </div> */}
    </div>
  );
}
