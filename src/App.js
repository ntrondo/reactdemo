import React, { useEffect, useState } from "react";
import Histogram from "./Histogram";
import ControlPanel from "./ControlPanel/Panel";
import { GenerateInitialItemModels } from "./Sort/ItemsUtility"

function App() {
  const [options,] = useState(() => {
    const val = {
      items: null,
      asc: false,
      algorithm: "bubblesort",
      pause: 500,
      setShowOptions: (show) => { },
      sorted:true,
      sorting:false
    }
    val.setSorting=(sorting)=>{
      val.sorting=sorting
    }
    val.setSorted=(sorted)=>{
      //console.log("options setSorted(" + sorted + ")")
      val.sorted = sorted
    }
    val.setItems = (items) => {
      //console.log("options setItems") 
      val.items = items 
    }
    return val
  })

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
