import React from "react";
import "./navbar.css";
//import ScrollIntoView from 'react-scroll-into-view'
import { Anchor } from "antd";
const { Link } = Anchor;
export default function navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src="./logo.png" alt="" />
        <Anchor targetOffset={60}>
          <Link href="#whoWeAre" title="Who We Are" />
          <Link href="#whatweoffer" title="What We Offer" />
          <Link href="#team" title="Our Team" />
          <Link href="#contact" title="Contact Us" />
          <Link href="#" title="Terms" />
          <Link href="#" title="Tech Corner" />
        </Anchor>
      </nav>
    </div>
  );
}
