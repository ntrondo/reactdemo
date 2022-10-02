export default function Sort(values, comp, movefn) {
    const allMoves = [];
    let i = 0, j, m = values.length - 1
    for (; i < m; i++) {
        for (j = 0; j < m - i; j++) {
            if (comp(values[j], values[j + 1]) > 0) {
                const innerMoves = 
                [
                    {id:values[j].id,toIndex:j+1, highlight:true},
                    {id:values[j+1].id,toIndex:j, highlight:false}
                ]
                allMoves.push(innerMoves)
                movefn(values, innerMoves)
            }
        }
    }
    return allMoves
}