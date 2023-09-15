import { useState, useContext, createContext } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Resume from './Pages/Resume/Resume'
import { UserContext } from "./main";

function App() {

  const {state, actions} = useContext(UserContext);

  return (
    <>
      {state.data.page==1 && <Home />}
      {state.data.page==2 && <Resume />}
    </>
  );
}

export default App;
