import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="./logo.png" alt="" />{" "}
        </Link>
        <Link to="/">Who We Are</Link>
        <Link to="/">What We Offer</Link>
        <Link to="/">Our Team</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Terms</Link>
        <Link to="/">Tech Corner</Link>
      </nav>
    </div>
  );
}
