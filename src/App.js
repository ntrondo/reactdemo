import React, {useState} from "react";
import Histogram from "./Histogram";
function GenerateInitialItemModels(){
  
  let ids = Array.from({length:2}, (_,i)=> i)
  return ids.map(i=>{
    return { 
      id:i, 
      height:Math.random(), 
      index:0
    }
    })  
}
function App() {
  const [itemModels, setItemModels] = useState(GenerateInitialItemModels);
  return (
    <>
   <div className="is-flex is-root has-background-gray">
      <div className="has-background-yellow">
      </div>
      <Histogram itemModels={itemModels}/>
   </div>
   </>
  );
}

export default App;
