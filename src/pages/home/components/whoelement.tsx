import React from 'react'
import "./whoelement.css";


interface propType {
    imgSrc: string,
    title: string,
    text: string
}

export default function WhoElement(props: propType) {
  return (
    <div className="who-element">
      <img src={props.imgSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}