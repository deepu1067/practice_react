import uiuLogo from "./uiu.png";
import "./App.css";
import { useState } from "react";
import { ShowMessage } from "./show";

function App() {
  const [msg, setMsg] = useState("");
  let entered = (event) => {
    if (event.key === "Enter") {
      let value = event.target.value; //011202037
      let batch = parseInt(value[3] + value[4] + value[5]);

      if (batch >= 191 && batch <= 202) setMsg("Congo Mamu!!🥳");
      else {
        setMsg("Dukkhito!!😭");
      }
    }
  };

  return (
    <section className="">
      <img src={uiuLogo} alt="uiu"></img>
      <h1>7th Convocation</h1>
      <h3>24 February, 2024</h3>
      <input
        className="input"
        name="studentId"
        placeholder="Enter Your Id: "
        onKeyDown={entered}
      />
      <ShowMessage message = {msg} />
    </section>
  );
}

export default App;
