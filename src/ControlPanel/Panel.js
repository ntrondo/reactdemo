import VerticalMenu from "./VerticalMenu";
import SortingOptions from "./SortingOptions";

export default function ControlPanel({options}) {    
    return (
        <div className="is-controlpanel">
            <VerticalMenu options={options}/>
            <SortingOptions options={options}/>
        </div>
    )
}