import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const UserContext = createContext();

const Provider = (props) => {
  const [data, setData] = useState({page: 1});
  const value = {
    state: { data },
    actions: { setData },
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider children={<App />} />
  </React.StrictMode>
);
