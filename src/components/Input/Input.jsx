import React, { useState, useEffect } from "react";
import "./input.css";

export default function Input(props) {
  const [error, setError] = useState(null);
  useEffect(()=>{
    setError(props.error);
  });
  return (
    <div className="input-container">
      <input
        className={`input ${props.error ? 'error' : ''}`}
        required="required"
        value={props.value}
        onChange={props.onChange}
      />
      <span>{props.title}</span>
    </div>
  );
}
