import { useState, useEffect } from "react";
import {GenerateInitialItemModels} from "../Sort/ItemsUtility"
import { Sort } from "../Sort/ItemsUtility";

export default function SortingOptions(wrappedOptions) {
    const options = wrappedOptions.options
    const[showOptions,setShowOptions] = useState(options.showOptions)
    useEffect(()=>{
        console.log("SortingOptions useEffect()")        
        options.setItems(GenerateInitialItemModels(15))
        options.setShowOptions=(show)=>{
            options.showOptions = show
            setShowOptions(show)
        }
    },[])
    const algorithmChanged = (e)=>{
        const value = e.target.value
        options.algorithm = e.target.value
        if(options.sorting){
            options.setSorting(false)
        }
        console.log("algorithm changed to " + value)
    }
    const countChanged = (e)=>{        
        const val = parseInt( e.target.value)
        console.log("SortingOptions countChanged() " + val)
        options.setItems(GenerateInitialItemModels(val))        
    }
    const speedChanged = (e)=>{
        const val = parseInt( e.target.value)
        console.log("SortingOptions speedChanged() " + val)
        options.pause = val
    }
    const animationChanged = (e)=>{}
    if(!showOptions)
    return <></>;
  
    return (
        <div className="is-options">
            <h3>Sorting Options</h3>
            <div>
                <label>Algorithm:</label>
                <select defaultValue={options.algorithm} onChange={algorithmChanged}>
                <option value="bubblesort">Bubble Sort</option>
                <option value="insertionsort">Insertion Sort</option>
                    
                    <option value="selectionsort">Selection Sort</option>
                </select>
            </div>
            <div>
                <label>Count:</label>
                <select defaultValue="15" onChange={countChanged}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </div>
            <div>
                <label>Speed:</label>
                <select defaultValue="900" onChange={speedChanged}>
                    <option value="1300">Slow</option>
                    <option value="900">Normal</option>
                    <option value="300">Fast</option>
                </select>
            </div>
            {/* <div>
                <label>Animation:</label>
                <select value="smooth" onChange={animationChanged}>
                    <option value="smooth">Smooth</option>
                </select>
            </div> */}
        </div>
    )
}