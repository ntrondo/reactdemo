import { useState, useEffect } from "react";
import {GenerateInitialItemModels, Sort} from "../Sort/Sorter"
import { combineFunctions } from "../State";
function StopAndResumeSorting(options){
    if(options.sorting){
        options.setSorting(false)
        setTimeout(()=>{
            Sort(options)
        }, options.pause * 2)            
    }
}
export default function SortingOptions({options}) {
    const[showOptions,setShowOptions] = useState(options.showOptions)
    useEffect(()=>{
        //console.log("SortingOptions useEffect()")        
        options.setItems(GenerateInitialItemModels(20))
        options.setShowOptions= combineFunctions(options.setShowOptions, setShowOptions)
    },[])
    const algorithmChanged = (e)=>{
        StopAndResumeSorting(options)
        options.algorithm = e.target.value
    }
    const countChanged = (e)=>{        
        StopAndResumeSorting(options)
        const val = parseInt( e.target.value)
        options.setItems(GenerateInitialItemModels(val))        
    }
    const speedChanged = (e)=>{
        const val = parseInt( e.target.value)
        options.setPause(val)
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
                <select defaultValue="20" onChange={countChanged}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
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