import React from 'react'
import "./banner.css"
import "antd/dist/antd.css";
import {ArrowDownOutlined } from '@ant-design/icons'
export default function Banner() {
  return (
    <div className="banner" id="banner">
      <img src="./samparkbindu 3.png" alt=""/>
      <h1>Scroll</h1>
      <i><ArrowDownOutlined /></i>
    </div>
  );
}

