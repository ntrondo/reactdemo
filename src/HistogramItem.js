import { useEffect, useState } from "react";

function GetIndex(itemModel){
    console.log("HistogramItem.GetIndex()")
    return itemModel.index
}
function CalculateStyles(item, totalItems){
    let margin = 2;
    let width = Math.floor(100 / totalItems - 2 * margin)    
    let left = item.index * (width + 2 * margin);    
    let height = item.height * 100;
    let top = 100 - height - margin;
    let myStyle = {
        top:top + "%",
        left:left + "%",
        height: height + "%",
        width: width + "%",
        margin:"0 " + margin + "% 0 " + margin + "%"
    }
    return myStyle
}
export default function HistogramItem({itemModel, totalItems}){
    console.log("HistogramItem.Render(item:" + itemModel.id + ")");
    const[index, setIndex] = useState(()=>{ return GetIndex(itemModel)})
    const styles = CalculateStyles(itemModel,totalItems)
    useEffect(()=>{
        itemModel.setIndex = function(newIndex){
            itemModel.index = newIndex
            setIndex(newIndex)
        } 
    },[])
    useEffect(()=>{
        console.log("HistogramItem.useEffect() index changed. index:" + index)
    },[index])
    
    return(
        <div className="is-histogram-item" style={styles}>
            {itemModel.height}<br/>
            {itemModel.index}
        </div>
    )
}