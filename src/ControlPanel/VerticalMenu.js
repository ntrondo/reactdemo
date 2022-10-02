import { useEffect, useState } from "react"
import { Sort } from "../Sort/ItemsUtility";

function renderPlayButton(showPlayButton, onClicked) {
    if (!showPlayButton)
        return null
    return (<div>
        <a className="is-button" onClick={onClicked}>&#9654;</a>
    </div>)
}
function renderStopButton(showButton, onClicked) {
    if (!showButton)
        return null
    return ( <div>
        <a className="is-button" onClick={onClicked}>&#9632;</a>
    </div>)
}
export default function VerticalMenu(wrappedOptions) {
    const options = wrappedOptions.options
    const [sorting, setSorting] = useState(options.sorting)
    const [sorted, setSorted] = useState(options.sorted)
    useEffect(()=>{
        const ossorting = options.setSorting
        options.setSorting=(sorting)=>{
            ossorting(sorting)
            setSorting(sorting)
        }
        const ossorted = options.setSorted
        options.setSorted = options.setSorted=(sorted)=>{
            ossorted(sorted)
            setSorted(sorted)
        }
    })

    const playClicked = (e) => {
        console.log("play clicked");
        Sort(options)
    }
    const stopClicked = (e) => {
        console.log("stop clicked");
        options.setSorting(false)
    }
    const optionsClicked = (e) => {
        options.setShowOptions(!options.showOptions)
    }

    return (
        <div className="is-vertical-menu">

            {renderPlayButton(!sorting && !sorted, playClicked)}
            {renderStopButton(options.sorting, stopClicked)}           
            <div>
                <a className="is-button" onClick={optionsClicked}>&#128202;</a>
            </div>
        </div>
    )
}