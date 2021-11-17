import React from 'react'
import "./title.css";
interface propType{
    title:string
}
export default function title(props:propType) {
  return (
    <div className="category-title">
      <h2>
        <span>{props.title}</span>
      </h2>
    </div>
  );
}

