import { useEffect, useState } from "react"
import { combineFunctions } from "./State"

export default function InitialMessage({options}){
    const[sorting,setSorting]=useState(options.sorting)
    const[sorted,setSorted]=useState(options.sorted)
    const[showOptions, setShowOptions]=useState(options.showOptions)
    useEffect(()=>{
        options.setSorting = combineFunctions(options.setSorting, setSorting)
        options.setSorted = combineFunctions(options.setSorted, setSorted)
        options.setShowOptions = combineFunctions(options.setShowOptions, setShowOptions)
    },[])
    if(sorting || sorted || showOptions){
        return null
    }        
    return(
        <div id="initialMesssage"><h3>Sorting algorithm animation. Press play to start.</h3></div>
    )
}