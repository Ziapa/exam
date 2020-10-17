import React from "react";


type DisplayPropsType = {
    count:number
}

export const Counter = (props: DisplayPropsType) => {

    const alert = {
        color: props.count === 5 ? "red" : "black"
    }

return <div className={"field"}>


    <input style={alert}type="text" value={props.count}/>
</div>
}