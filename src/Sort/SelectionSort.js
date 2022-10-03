export default function Sort(items, comp, movefn) {
    console.log("SelectionSort.Sort()")
    const allMoves = []
    let extractionIndex, innerMoves, newIndex
    for (let i = 0; i < items.length; i++) {
        extractionIndex = i + GetIndex(items.slice(i, items.length), comp)
        if (extractionIndex === i)
            continue
        //console.log("InsertionSort.Sort() moving item from " + i + " to " + newIndex)
        innerMoves = GetMoves(items, i, extractionIndex);
        allMoves.push(innerMoves)
        movefn(items, innerMoves)
    }
    return allMoves
}
function GetMoves(items, insertionIndex, extractionIndex) {
    const moves = [{ id: items[extractionIndex].id, toIndex: insertionIndex, highlight: true }]
    for (let i = insertionIndex; i < extractionIndex; i++)
        moves.push({ id: items[i].id, toIndex: i + 1, highlight: false })

    return moves
}
function GetIndex(items, comp) {
    let index = 0
    for (let i = 1; i < items.length; i++)
        if (comp(items[index], items[i]) > 0)
            index = i
    return index
}