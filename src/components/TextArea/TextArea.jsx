import React from "react";
import './TextArea.css';

export default function TextArea(props) {
  return (
    <div className={`text-area-container`}>
      <label htmlFor={props.title}></label>
      <textarea
      className="text-area"
        name={props.title}
        id={props.title}
        cols={props.cols}
        rows={props.rows}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}
