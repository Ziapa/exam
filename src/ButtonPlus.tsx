import React from "react";

type ButtonPlusPropsType = {
    title: string
    disableBtn?:boolean
    changeStatus?: string
    changeCount?: () => void
}


export const ButtonPlus = (props: ButtonPlusPropsType) => {


    return <button disabled={props.disableBtn} className={props.changeStatus} onClick={props.changeCount}>{props.title}</button>
}