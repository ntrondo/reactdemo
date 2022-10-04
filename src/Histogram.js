import React, { useEffect, useState } from "react";
import HistogramItem from "./HistogramItem";
import { combineFunctions } from "./State";
function Histogram({ options }) {   
    const [items, setItems] = useState([]); 
    useEffect(()=>
    {
        //Append local hook to setter
        options.setItems = combineFunctions(options.setItems, setItems)
        //Run local hook as useState was called with empty array
        setItems(options.items)
    },[])
    if(options.items == null)
    return null
    return (
        <div className="has-background-blue is-full-width is-histogram">
            {
                options.items.map(item => {
                    return <HistogramItem key={item.id} itemModel={item} options={options} />
                })
            }
        </div>
    )
}
export default Histogram;