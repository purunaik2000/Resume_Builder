import React, { useState, useContext, Fragment } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { UserContext } from "../../main";

export default function Form3() {
  const { state, actions } = useContext(UserContext);
  const [education, setEducation] = useState([
    {
      degree: "",
      institute: "",
      yearOfPassing: "",
      percentage: "",
    },
  ]);

  const [disabled, setDisabled] = useState("");

  const addMoreHandler = () => {
    if (education.length == 2) setDisabled("disabled");
    setEducation([
      ...education,
      { degree: "", institute: "", yearOfPassing: "", percentage: "" },
    ]);
  };

  const handleOnChange = (event, index, field) => {
    const newArray = [...education];
    newArray[index][field] = event.target.value;
    setEducation(newArray);
    const newData = { ...state.data };
    newData.education = newArray;
    actions.setData(newData);
  };

  return (
    <div className="form3-container">
      {education.map((edu, index) => (
        <Fragment key={index+'edu'}>
          <div className="edu1">
            <Input
              title="degree"
              onChange={(event) => handleOnChange(event, index, "degree")}
              id={`degree-${index}`}
            />
            <Input
              title="institute"
              onChange={(event) => handleOnChange(event, index, "institute")}
              id={`institute-${index}`}
            />
          </div>
          <div className="edu2">
            <Input
              title="year of passing"
              onChange={(event) =>
                handleOnChange(event, index, "yearOfPassing")
              }
              id={`yop-${index}`}
            />
            <Input
              title="percentage"
              onChange={(event) => handleOnChange(event, index, "percentage")}
              id={`percentage-${index}`}
            />
          </div>
        </Fragment>
      ))}
      <span className={disabled}><Button text="Add more" onClick={addMoreHandler} /></span>
    </div>
  );
}
