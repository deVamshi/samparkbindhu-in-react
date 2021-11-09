import "./Banner.css";
export default function Banner() {
  return (
    <div className="banner" id="banner">
      {/* <div>This is text</div> */}
      <img src="./banner.jpg" alt="" />
      <h1>Scroll</h1>
      <i className="fas fa-arrow-down"></i>
    </div>
  );
}
