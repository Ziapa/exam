import React from "react";

type ButtonPlusPropsType = {
    changeCount?: () => void
    changeStatus?: string
    title: string
    disableBtn:boolean
}


export const ButtonPlus = (props: ButtonPlusPropsType) => {


    return <button disabled={props.disableBtn} className={props.changeStatus} onClick={props.changeCount}>{props.title}</button>
}