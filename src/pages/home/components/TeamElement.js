import "./TeamElement.css";
export default function TeamElement({ text, name, designation, imgUrl }) {
  return (
    <div className="team-element">
      <div className="image-name">
        <img src={imgUrl} alt="" />
        <h3>{name}</h3>
        <p className="designation">{designation}</p>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
}
