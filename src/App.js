import React, { useEffect, useState } from "react";
import Histogram from "./Histogram";
import ControlPanel from "./ControlPanel/Panel";
import CreateState  from "./State"

function App() {
  const [options,] = useState(CreateState)
  return (
    <>
      <div className="is-flex is-root has-background-black">
        <ControlPanel options={options} />
        <Histogram options={options} />
      </div>
    </>
  );
}

export default App;
