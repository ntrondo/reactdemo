import React, { useEffect, useState } from "react";
import HistogramItem from "./HistogramItem";
function Histogram({ options }) {   
    const [items, setItems] = useState([]); 
    useEffect(()=>
    {
        //console.log("Histogram useEffect()")
        let existingFn = options.setItems
        options.setItems=(items)=>{
            existingFn(items)
            setItems(items)
        }
        setItems(options.items)
    })
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