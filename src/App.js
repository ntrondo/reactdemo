import React, { useEffect, useState } from "react";
import Histogram from "./Histogram";
import ControlPanel from "./ControlPanel/Panel";
import CreateState  from "./State"
import InitialMessage from "./InitialMessage";

function App() {
  //Create options(state) once.
  const [options,] = useState(CreateState)
  return (
    <>
      <div className="is-flex is-root has-background-black">
        <InitialMessage options={options} />
        <ControlPanel options={options} />
        <Histogram options={options} />
      </div>
    </>
  );
}

export default App;
