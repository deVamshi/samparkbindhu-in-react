import "./WhoElement.css";

export default function WhoElement({ imgSrc, title, text }) {
  return (
    <div className="who-element">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
