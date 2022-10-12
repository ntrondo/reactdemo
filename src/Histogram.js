import React, { useEffect, useMemo, useState } from "react";
import HistogramItem from "./HistogramItem";
import { combineFunctions } from "./State";

function Histogram({ options }) {
    const [, setItems] = useState([]);
    const [effectPause, setEffectPause] = useState(options.pause)
    useEffect(() => {
        //Append local setters to state setters
        options.setItems = combineFunctions(options.setItems, setItems)        
        options.setPause = combineFunctions(options.setPause, setEffectPause)
        //Run local setter as useState was called with empty array
        setItems(options.items)
    }, [options])
    const styles = useMemo(() => ({
        transition: "left " + effectPause + "ms"
    }), [effectPause])
    if (options.items == null)
        return null
    return (
        <div className="has-background-blue is-full-width is-histogram" style={styles}>
            {
                options.items.map(item => {
                    return <HistogramItem key={item.id} itemModel={item} options={options} />
                })
            }
        </div>
    )
}
export default Histogram;