import "./input.css";

export default function Input(props) {
  let colors = {
    primary: "primary",
    secondary: "secondary",
  };

  return (
    <div className={`input-container ${colors[props.color] || "primary"}`}>
      <input
        className={`input ${props.error ? "error" : ""}`}
        required="required"
        value={props.value}
        onChange={props.onChange}
        id={props.id || props.title}
        type={props.type}
      />
      <label htmlFor={props.id || props.title}>{props.title}</label>
    </div>
  );
}
