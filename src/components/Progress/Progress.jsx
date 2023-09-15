import React from "react";
import "./Progress.css";

export default function Progress(props) {
    let colors = {
        primary: 'primary',
        secondary: 'secondary'
    }
  return (
    <div className={`progress-container progress-${colors[props.color] || 'primary'}`}>
      <ul className="progress">
        <li>
          <span className={`${props.step>0 ? 'completed' : 'incomplete'}-step`} >1</span>
          <div className="field-name">Personal</div>
        </li>
        <li>
          <span className={`${props.step>1 ? 'completed' : 'incomplete'}-step`} >2</span>
          <div className="field-name">Contact</div>
        </li>
        <li>
          <span className={`${props.step>2 ? 'completed' : 'incomplete'}-step`} >3</span>
          <div className="field-name">Education</div>
        </li>
        <li>
          <span className={`${props.step>3 ? 'completed' : 'incomplete'}-step`} >4</span>
          <div className="field-name">Skills</div>
        </li>
        <li>
          <span className={`${props.step>4 ? 'completed' : 'incomplete'}-step`} >5</span>
          <div className="field-name">Experience</div>
        </li>
      </ul>
      <div className={`progress-bar step-${props.step}`}></div>
      <div className={`progress-bar-line`}></div>
    </div>
  );
}
