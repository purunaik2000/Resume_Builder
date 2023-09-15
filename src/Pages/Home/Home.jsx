import React, {useContext, useState} from "react";
import "./Home.css";

import Progress from "../../components/Progress/Progress";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import { UserContext } from "../../main";

export default function Home() {

  const {state, actions} = useContext(UserContext);

  const [step, setStep] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState('disabled');
  const [nextDisabled, setNextDisabled] = useState('');

  const prevClickHandler = ()=>{
    if(prevDisabled) return;
    if(step==1) setPrevDisabled('disabled');
    setStep(step-1);
    setNextDisabled('');
  }

  const nextClickHandler = ()=>{
    if(nextDisabled) return;
    if(step==4) setNextDisabled('disabled');
    setStep(step+1);
    setPrevDisabled('')
    if(step==4) {
      const newData = {...state.data};
      newData.page = 2;
      actions.setData(newData);
    }
    console.log(state.data);
  }

  return (
    <div className="home-page">
      <div className="heading">
        <span>Resume Builder</span>
      </div>
      <div className="form-progress">
        <Progress step={step} />
      </div>
      <Form step={step} />
      <div className="buttons">
        <Button onClick={prevClickHandler} text="Prev Page" disabled={prevDisabled} />
        <Button onClick={nextClickHandler} text="Next Page" disabled={nextDisabled} />
      </div>
    </div>
  );
}
