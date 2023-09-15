import React, { useState, useContext } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { UserContext } from "../../main";

export default function Form4() {
  const { state, actions } = useContext(UserContext);
  const [skills, setSkills] = useState([""]);
  const [disabled, setDisabled] = useState("");

  const handlerAddMore = () => {
    if(skills.length==4) setDisabled('disabled');
    setSkills([...skills, '']);
  }

  const handleOnChange = (event, index) => {
    const newArray = [...skills];
    newArray[index] = event.target.value;
    setSkills(newArray);
    const newData = { ...state.data };
    newData.skills = newArray;
    actions.setData(newData);
  }

  return (
    <div className="form4-container">
      {
        skills.map((skill, index)=><Input key={index} value={skills[index]} title={`add skill-${index+1}`} onChange={(event)=>handleOnChange(event, index)} />)
      }
      <span className={disabled}><Button text='Add more' onClick={handlerAddMore} /></span>
    </div>
  );
}
