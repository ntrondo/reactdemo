
import {default as BubbleSort} from "./BubbleSort";
import {default as InsertionSort} from "./InsertionSort";
import {default as SelectionSort} from "./SelectionSort";

var nextId=0
export function GenerateInitialItemModels(count) {
    let ids = Array.from({ length: count }, (_, i) => i)
    let items = ids.map(i => {
        return {
            id: nextId++,
            height: Math.random().toFixed(2),
            index: i,
            isHighlighted:false
        }
    })
    return items
}
export function Sort(options) {
    options.setSorting(true)
    const items = [...options.items]
    items.sort((a,b)=>{return a.index - b.index})
    const values = items.map(i => { return { id: i.id, value: i.height } })
    
    const comp = (a, b) => { return (a.value - b.value) * (options.asc ? 1 : -1) }
    const sort = GetSortAlgorithm(options)
    options.moves = sort(values, comp, move)
    if(options.moves.length === 0)
        options.setSorted(true)
    AnimateMoves(options)
}
function GetSortAlgorithm(options){
    switch(options.algorithm){
        case "bubblesort": return BubbleSort
        case "insertionsort": return InsertionSort
        case "selectionsort": return SelectionSort
        default: alert("Unsupported sorting algorithm '" + options.algorithm + "'")
    }
}
function AnimateMoves(options) {    
    if(options.moves.length > 0)
    {
        const move = options.moves[0];
        options.moves.splice(0, 1);
        AnimateMove(options.items, move);
        options.setSorted(options.moves.length === 0)
        setTimeout(() => {
            options.items.forEach(i=>i.setIsHighlighted(false))
            AnimateMoves(options)
        }, options.pause);
    }
    if(options.sorted)
        options.setSorting(false)
    if(!options.sorting)
        options.moves = []
}
function AnimateMove(items, moves) {
    for(let i = 0; i < moves.length;i++){        
        const move = moves[i]
        const item = items.find(i => { return i.id === move.id })
        item.setIsHighlighted(move.highlight)
        if(item.isHighlighted){                
            //setTimeout(()=>{item.setIsHighlighted(false)}, 900)
        }
        item.setIndex(move.toIndex)
    }  
}
/**Moves one item in the array according to move-object */
function move(items, moves) {
    const temp = [...items]
    let  item
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i]
        item = temp.find(c => c.id === move.id)
        items[move.toIndex] = item
    }
}
