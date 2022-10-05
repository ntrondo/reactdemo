export default function CreateState() {
    const val = {
        items: null,
        setItems:(items)=>{
            //console.log("setItems(" + items.length + ")")
        },
        asc: true,
        algorithm: "bubblesort",
        pause: 500,
        showOptions: false,
        setShowOptions:(show)=>{
            //console.log("setShowOptions(" + show + ")")
        },
        sorted: true,
        setSorted:(sorted)=>{
            //console.log("setSorted(" + sorted + ")")
        },
        sorting: false,
        setSorting:(sorting)=>{
            //console.log("setSorting(" + sorting + ")")
        }
    }
    val.setShowOptions = combineFunctions(val.setShowOptions, (show) => {
        val.showOptions = show
    })
    val.setSorting = combineFunctions(val.setSorting, (sorting) => {
            val.sorting = sorting
        })
    val.setSorted = combineFunctions(val.setSorted, (sorted) => {
        val.sorted = sorted
    })
    val.setItems = combineFunctions(val.setItems, (items) => {
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