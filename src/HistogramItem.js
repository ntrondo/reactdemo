import { useEffect, useState } from "react";

function GetIndex(itemModel){
    return itemModel.index
}
function CalculateStyles(item, options){
    let margin = 1;
    let width = Math.floor(100 / options.items.length - 2 * margin)    
    let left = item.index * (width + 2 * margin);    
    let height = item.height * 100;
    let top = 100 - height;
    let myStyle = {
        top:top + "%",
        left:left + "%",
        height: height + "%",
        width: width + "%",
        margin:"0 " + margin + "% 0 " + margin + "%"    ,
        transition:"left " + options.pause + "ms"    
    }
    if(item.isHighlighted)
        myStyle.backgroundImage ="linear-gradient(gold, red)"
    return myStyle
}
export default function HistogramItem({itemModel, options}){
    //console.log("HistogramItem.Render(item:" + itemModel.id + ")");
    const[, setIndex] = useState(()=>{ return GetIndex(itemModel)})
    const[, setIsHighlighted] = useState(false);
    const styles = CalculateStyles(itemModel,options)
    useEffect(()=>{
        itemModel.setIndex = function(newIndex){
            itemModel.index = newIndex
            setIndex(newIndex)
        } 
        itemModel.setIsHighlighted = function(isHighlighted){
            itemModel.isHighlighted = isHighlighted
            setIsHighlighted(isHighlighted)
        }
    },[itemModel])
    
    return(
        <div className="is-histogram-item" style={styles}>
        </div>
    )
}