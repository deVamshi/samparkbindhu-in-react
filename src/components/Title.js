import "./title.css";
export default function Title({ title }) {
  return (
    <div className="category-title">
      <h2>
        <span>{title}</span>
      </h2>
    </div>
  );
}
