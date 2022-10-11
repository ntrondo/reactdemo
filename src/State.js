
export default function CreateState() {
    const val = {
        items: null,
        // setItems:(items)=>{
        //     console.log("setItems(" + items.length + ")")
        // },
        asc: true,
        algorithm: "bubblesort",
        pause: 500,
        showOptions: false,
        // setShowOptions:(show)=>{       
        //     console.log("setShowOptions(" + show + ")")
        // },
        sorted: true,
        // setSorted:(sorted)=>{
        //     console.log("setSorted(" + sorted + ")")
        // },
        sorting: false,
        setSorting:(sorting)=>{
            //console.log("setSorting(" + sorting + ")")
        }
    }
    //Referencing 'this' in setters is unreliable. 
    //The setters need a reference to the parent object.
    //That is why thy are assigned after initialisation of parent is complete.
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
    val.setPause = combineFunctions(val.setPause, (pause)=>{ val.pause = pause})
    return val
}
//Returns a new function that executes the provided functions in order with argument given at call time.
//Intended to work for single argument calls.
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