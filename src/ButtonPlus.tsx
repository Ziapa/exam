import React from "react";

type ButtonPlusPropsType = {
    changeCount: () => void
    changeStatus: string
    title: string
}


export const ButtonPlus = (props: ButtonPlusPropsType) => {


    return <button className={props.changeStatus} onClick={props.changeCount}>{props.title}</button>
}