import React, { useEffect } from "react";
import HistogramItem from "./HistogramItem";

function SetInitialIndices(items){
    let i = 0;
    items.forEach(item => {
        if(item.index != item.id)
            item.setIndex(item.id)
    });
}
function Histogram({ itemModels }) {
    useEffect(()=>
    {
        setTimeout(()=>{SetInitialIndices(itemModels)}, 2000)
    },[])
    return (
        <div className="has-background-blue is-full-width is-histogram">
            {
                itemModels.map(item => {
                    return <HistogramItem key={item.id} itemModel={item} totalItems={itemModels.length} />
                })
            }
        </div>
    )
}
export default Histogram;