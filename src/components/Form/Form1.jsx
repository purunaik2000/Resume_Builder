import React, {useContext, useState} from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import { UserContext } from "../../main";

export default function Form1() {
  const { state, actions } = useContext(UserContext);
  const [personal, setPersonal] = useState({
    fname: '',
    lname: '',
    title: '',
    address: '',
    about: ''
  });

  const handleOnChange = (event, key) => {
    const temp = {...personal};
    temp[key] = event.target.value;
    setPersonal(temp);
    const newData = {...state.data};
    if(key == 'fname' || key == 'lname' )newData.name = temp.fname+' '+temp.lname;
    else newData[key] = temp[key];
    actions.setData(newData);
  }
  

  return (
    <div className="form1-container">
      <div className="name">
        <Input onChange={(event)=>handleOnChange(event, 'fname')} title="first name" />
        <Input onChange={(event)=>handleOnChange(event, 'lname')} title="last name" />
      </div>
      <div className="address" >
        <Input onChange={(event)=>handleOnChange(event, 'title')} title="title" />
        <Input onChange={(event)=>handleOnChange(event, 'address')} title="address" />
      </div>
      <div className="about">
        <TextArea onChange={(event)=>handleOnChange(event, 'about')} rows='7' cols='40' placeholder='Describe yourself in 50-70 words' />
      </div>
    </div>
  );
}
