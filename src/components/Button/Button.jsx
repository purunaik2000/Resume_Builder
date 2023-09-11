import React from 'react';
import './Button.css';

export default function Button(props) {

  let colors = {
    primary: 'primary',
    secondary: 'secondary'
  }

  return (
    <div className='btn-container'>
      <button className={`btn btn-${colors[props.type] || 'primary'}`} onClick={props.onClick}>
        { props.text }
      </button>
    </div>
  );
}
