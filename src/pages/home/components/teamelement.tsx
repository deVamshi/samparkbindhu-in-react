import React from 'react'
import "./teamelement.css";
interface param {
  text: string;
  name: string;
  designation: string;
  imgUrl: string;
}
export default function TeamElement(props: param) {
  return (
    <div className="team-element">
      <div className="image-name">
        <img src={props.imgUrl} alt="" />
        <h3>{props.name}</h3>
        <p className="designation">{props.designation}</p>
      </div>
      <div className="text">{props.text}</div>
    </div>
  );
}
