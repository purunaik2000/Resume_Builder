import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  function isValidName(name) {
    return /^[a-zA-Z ]{2,30}$/.test(name);
  }

  function onChangeNameHandler(event) {
    setName(event.target.value);
    if (!isValidName(name)) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
        explicabo tempore laborum cum! Tempora numquam saepe ipsam laboriosam
        voluptatem quod similique, necessitatibus harum autem amet nesciunt
        labore perspiciatis molestiae culpa.
      </p>
      <Button type="primary" text="Click Here" />
      <br></br>
      <br></br>
      <br></br>
      <Input
        title="Name"
        value={name}
        onChange={onChangeNameHandler}
        error={error}
      />
    </>
  );
}

export default App;
