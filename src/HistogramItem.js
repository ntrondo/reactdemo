import { useEffect, useMemo, useState } from "react";
import { combineFunctions } from "./State";

function GetIndex(itemModel) {
    return itemModel.index
}
function CalculateBaseStyles(item, options) {
    let marginRelativeToItem = 0.12
    let spaceAvailablePerItem = 100 / options.items.length
    let marginRelativeToParent = spaceAvailablePerItem * marginRelativeToItem
    let width = spaceAvailablePerItem - 2 * marginRelativeToParent
    let height = item.height * 100;
    return {
        margin: marginRelativeToParent,
        height: height + "%",
        top: (100 - height) + "%",
        width: width,
        transition: "inherit"
    }
}
function CalculateStyles(baseStyles, item) {
    let left = item.index * (baseStyles.width + 2 * baseStyles.margin) + baseStyles.margin
    let myStyle = {
        top: baseStyles.top,
        height: baseStyles.height,
        width: baseStyles.width.toFixed(1) + "%",
        transition: baseStyles.transition,
        left: left.toFixed(1) + "%"
    }
    if (item.isHighlighted)
        myStyle.backgroundImage = "linear-gradient(gold, red)"
    return myStyle
}
export default function HistogramItem({ itemModel, options }) {
    const [index, setIndex] = useState(() => { return GetIndex(itemModel) })
    const [isHighlighted, setIsHighlighted] = useState(itemModel.isHighlighted)
    
    const baseStyles = useMemo(() => {
        //Do this once
        return CalculateBaseStyles(itemModel, options)
    },[itemModel,options])
    console.log(baseStyles)
    const styles = useMemo(() => {
        //Do this every time index or highlight changes.
        return CalculateStyles(baseStyles, itemModel)
    }, [index, isHighlighted])
    useEffect(() => {
        itemModel.setIndex = combineFunctions(itemModel.setIndex, (ni) => {
            itemModel.index = ni
        })
        itemModel.setIndex = combineFunctions(itemModel.setIndex, setIndex)
        itemModel.setIsHighlighted = combineFunctions(itemModel.setIsHighlighted, (ih) => {
            itemModel.isHighlighted = ih
        })
        itemModel.setIsHighlighted = combineFunctions(itemModel.setIsHighlighted, setIsHighlighted)
        
    }, [itemModel])
    return (
        <div className="is-histogram-item" style={styles}>
        </div>
    )
}