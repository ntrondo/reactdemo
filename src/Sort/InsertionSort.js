export default function Sort(items, comp, movefn) {
    const allMoves = [];
    let item, innerMoves, newIndex
    for (let i = 1; i < items.length; i++) {

        item = items[i]
        newIndex = GetIndex(items.slice(0, i), item, comp)
        if (newIndex === i)
            continue
        //console.log("InsertionSort.Sort() moving item from " + i + " to " + newIndex)
        innerMoves = GetMoves(items, newIndex, i);
        allMoves.push(innerMoves)
        movefn(items, innerMoves)
    }
    return allMoves
}
function GetIndex(ordered, item, comp) {
    //linear search
    for (let i = 0; i < ordered.length; i++) {
        if (comp(item, ordered[i]) < 0)
            return i
    }
    return ordered.length
}
function GetMoves(items, insertionIndex, extractionIndex) {
    const moves = [{ id: items[extractionIndex].id, toIndex: insertionIndex, highlight:true }]
    for (let i = insertionIndex; i < extractionIndex; i++)
        moves.push({ id: items[i].id, toIndex: i + 1, highlight:false })

    return moves
}