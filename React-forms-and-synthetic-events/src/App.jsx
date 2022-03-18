import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Employees } from "./components/Employees";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show ? <Employees /> : ""}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Form" : "Show Form"}
      </button>

      <Display />
    </div>
  );
}

export default App;
