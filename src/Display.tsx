import React from "react";


type DisplayPropsType = {
    count:number
    min:number
    max:number
    set?:boolean
}

export const Display = (props: DisplayPropsType) => {

    const alert = {
        color: props.count === props.max ? "red" : "black"
    }

return <div className={"field"}>

    {props.set ? <div>Set</div> : <div style={alert}>{props.count}</div>}

    </div>

}