import React from "react";


type DisplayPropsType = {
    count?: number
    error?: string
    max: number
    setDisplay?: boolean

}

export const Display = (props: DisplayPropsType) => {

    const alert = {
        color: props.count === props.max ? "red" : "black"

    }
    const color = {
        color:  "red"
    }

    return <div className={"field"}>

        {props.setDisplay
            ?
            <div style={color} className={"display"  }>

                {props.error}

            </div>
            :
            <div className={"display"} style={alert}>{props.count}</div>}

    </div>

}