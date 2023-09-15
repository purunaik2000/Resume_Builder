import React, { useContext, useState, Fragment } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { UserContext } from "../../main";

export default function Form5() {
  const { state, actions } = useContext(UserContext);

  const [experience, setExperience] = useState([
    {
      companyName: "",
      designation: "",
      duration: {
        from: "2023-09-15",
        to: "2023-09-15",
      },
    },
  ]);

  const [disabled, setDisabled] = useState("");

  const addMoreHandler = () => {
    if (experience.length == 2) setDisabled("disabled");
    setExperience([
      ...experience,
      {
        companyName: "",
        designation: "",
        duration: {
          from: "2023-09-15",
          to: "2023-09-15",
        },
      },
    ]);
  };

  const handleOnChange = (event, index, key1, key2) => {
    const newArray = [...experience];
    if (key2) newArray[index][key1][key2] = event.target.value;
    else newArray[index][key1] = event.target.value;
    setExperience(newArray);
    const newData = { ...state.data };
    newData.experience = newArray;
    actions.setData(newData);
  };

  return (
    <div className="form5-container">
      {experience.map((exp, index) => (
        <Fragment key={'exp-'+index}>
          <div className="exp1">
            <Input
              title="company name"
              onChange={(event) => handleOnChange(event, index, "companyName")}
              id={`company-${index}`}
            />
            <Input
              title="position"
              onChange={(event) => handleOnChange(event, index, "designation")}
              id={`position-${index}`}
            />
          </div>
          <div className="exp2">
            <Input
              type="date"
              title="from"
              onChange={(event) =>
                handleOnChange(event, index, "duration", "from")
              }
              value={exp.duration.from}
            />
            <Input
              type="date"
              title="to"
              onChange={(event) =>
                handleOnChange(event, index, "duration", "to")
              }
              value={exp.duration.to}
            />
          </div>
        </Fragment>
      ))}
      <span className={disabled}>
        <Button text="Add more" onClick={addMoreHandler} />
      </span>
    </div>
  );
}
