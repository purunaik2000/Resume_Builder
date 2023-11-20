import React, {useContext, useState} from "react";
import Input from "../Input/Input";
import { UserContext } from "../../main";

export default function Form2() {
  const { state, actions } = useContext(UserContext);
  const [contact, setContact] = useState({
    email: '',
    phone: '',
    linkedIn: '',
    github: ''
  });


  const handleOnChange = (event, key) => {
    const temp = {...contact};
    temp[key] = event.target.value;
    setContact(temp);
    const newData = {...state.data};
    newData[key] = temp[key];
    actions.setData(newData);
  }

  return (
    <div className="form2-container">
      <div className="personal-contact">
        <Input onChange={(event)=>handleOnChange(event, 'email')} title="email" />
        <Input onChange={(event)=>handleOnChange(event, 'phone')} title="phone" />
      </div>
      <div className="social-profile">
        <Input onChange={(event)=>handleOnChange(event, 'linkedIn')} title="linked in" />
        <Input onChange={(event)=>handleOnChange(event, 'github')} title="github" />
      </div>
    </div>
  );
}
