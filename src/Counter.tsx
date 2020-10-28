import {Display} from "./Display";
import {ButtonPlus} from "./ButtonPlus";
import React, {ChangeEvent, useState} from "react";

type CounterPropsType = {
    onDisable: () => void
    offDisable: () => void
    display: boolean
    button: boolean
    min: number
    max: number
    changeMax: (value: number) => void
    changeMin: (value: number) => void
    inc?: number
    changeInc: () => void
    disable: boolean
    incPlus: () => void
    error: string
    disableBtn: boolean
    disableIncReset: boolean

}

export function Counter(props: CounterPropsType) {

    const changeMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.onDisable()
        props.changeMin(e.currentTarget.valueAsNumber)
    }
    const changeMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.onDisable()
        props.changeMax(e.currentTarget.valueAsNumber)
    }
    return (

        <div className="App">
            {props.display ?
                <div className={"form"}>
                    <div>
                        <label htmlFor="">min value: </label>
                        <input value={props.min} onChange={changeMin} type="number"/>
                    </div>
                    <div>
                        <label htmlFor="">max value: </label>
                        <input value={props.max} onChange={changeMax} type="number"/>
                    </div>
                </div>
                :
                <Display

                    disable={props.disable}
                    max={props.max}
                    error={props.error}
                    count={props.inc}/>}
            <div>
                {props.button ?
                    <div className={"btnArea"}>
                        < ButtonPlus
                            disableBtn={props.disableBtn}
                            title={"set"}
                            changeStatus={""}
                            changeCount={props.changeInc}/>
                    </div>

                    :
                    <div className={"btnArea"}>
                        < ButtonPlus

                            changeStatus={props.inc === props.max ? "set_disable" : ""}
                            disableBtn={props.disableIncReset}
                            title={"inc"}
                            changeCount={props.incPlus}/>

                        <ButtonPlus
                            changeStatus={props.inc === props.min ? "set_disable" : ""}
                            disableBtn={props.disableIncReset}
                            title={"reset"}
                            changeCount={props.changeInc}/>
                    </div>
                }
            </div>


        </div>
    );
}