export default function CreateState() {
    const val = {
        items: null,
        asc: true,
        algorithm: "bubblesort",
        pause: 500,
        showOptions: false,
        sorted: true,
        sorting: false
    }
    val.setShowOptions = combineFunctions(val.setShowOptions, (show) => {
        val.showOptions = show
    })
    val.setSorting = combineFunctions(val.setSorting, (sorting) => {
            val.sorting = sorting
        })
    val.setSorted = combineFunctions(val.setSorted, (sorted) => {
        //console.log("options setSorted(" + sorted + ")")
        val.sorted = sorted
    })
    val.setItems = combineFunctions(val.setItems, (items) => {
        //console.log("options setItems") 
        val.items = items
        val.setSorted(items.length < 2)
    })
    return val
}
export function combineFunctions(fn1, fn2) {
    if (fn1 === undefined)
        return fn2
    if (fn2 === undefined)
        return fn1
    return (arg)=>{
        fn1(arg)
        fn2(arg)
    }
}