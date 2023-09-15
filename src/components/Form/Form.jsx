import React from 'react';
import './Form.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';

export default function Form(props) {

  const getForm = (step) => {
    switch(step){
      case 0: return <Form1 />
      case 1: return <Form2 />
      case 2: return <Form3 />
      case 3: return <Form4 />
      case 4: return <Form5 />
    }
  }

  return (
    <div className='main-form-container'>
      {
        getForm(props.step)
      }
    </div>
  );
}
