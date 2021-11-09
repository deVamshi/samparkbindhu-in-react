import "./Team.css";

import Title from "../../../components/Title";
import TeamElement from "./TeamElement";
// import { Row, Col } from "antd";
const aboutNagappa =
  "GS Nagappa is SamparkBindhu’s Director, leading the company as it builds a platform that empowers everyone to collaborate and be an integral part of their success journey.\n\nGS Nagappa's over four decades of leadership experience include growing consumer franchise in beverage alcohol categories across India. He retired as Chief Operating Officer at Diageo India and held various executive roles during his journey to the top. Today, as a  veteran and philanthropist, he continues to passionately work towards building new businesses by understanding new opportunities in Indian market.\n\nHe has a deep commitment to community and aims to achieve shared success.";

const aboutSuma =
  "Suma Sadananda is deeply committed to Social endeavors lead her to take up teaching profession in the initial years. After focusing on family and kids, she has started her second innings to pursue her interests. She is keen to promote product lines that solve local problems.";
const aboutSadananda =
  "Sadananda Murthy is SamparkBindhu’s who will be leading engineering and operations.\n\nSadananda Murthy is a management & delivery professional with more than two decades of Global Experience in building software products, leading teams, running Programs and operations at Fortune 500 companies like Motorola, Netapp and Broadcom. Broad portfolio of experience and Adept in different Software development life cycle methodologies, New Product Development and Operations .\n\nSadananda Murthy is interested in developing and driving digital transformation that would enable people to do things better and make a difference to the local community and groups at large. Topics that are passionate  to him - Using Technology for Social upliftment, Education and Social responsibility. He is an avid reader and loves writing and sharing thoughts on multiple topics, be it Technology, process or experiences.";
export default function Team() {
  return (
    // <>
    //   <Row>
    //     <Col span={2}>
    //       <div className="image-name">
    //         <img
    //           src={"https://samparkbindhu.com/images/photo.jpg?crc=3946348588"}
    //           alt=""
    //         />
    //         <h3>{"G S Nagappa"}</h3>
    //         <p className="designation">{aboutNagappa}</p>
    //       </div>
    //     </Col>
    //     <Col span={3}>Text</Col>
    //   </Row>
    // </>
    <div className="team" id="team">
      <Title title={"Our Team"} />
      <p>
        The people who work at SamparkBindhu share the vision and values of our
        community.
      </p>
      <TeamElement
        imgUrl={"https://samparkbindhu.com/images/photo.jpg?crc=3946348588"}
        name="G S Nagappa"
        designation="Director"
        text={aboutNagappa}
      />
      <TeamElement
        imgUrl={"https://samparkbindhu.com/images/suma.jpg?crc=4071106649"}
        name="Suma Sadananda"
        designation="Director"
        text={aboutSuma}
      />
      <TeamElement
        imgUrl={"https://samparkbindhu.com/images/sadu.jpg?crc=262279842"}
        name="Sadananda Murthy"
        designation="Engg. & Ops."
        text={aboutSadananda}
      />
    </div>
  );
}
