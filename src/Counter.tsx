import {Display} from "./Display";
import {ButtonPlus} from "./ButtonPlus";
import React, {ChangeEvent} from "react";

type CounterPropsType = {
    min?: number
    max: number
    inc?: number
    error: string
    disable: boolean
    setDisplay: boolean
    incPlus: () => void
    disableBtn?: boolean
    onDisable: () => void
    changeInc?: () => void
    disableIncReset?: boolean
    changeMax: (value: number) => void
    changeMin: (value: number) => void

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
            {props.setDisplay ?
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

                    setDisplay={props.setDisplay}
                    max={props.max}
                    error={props.error}
                    count={props.inc}/>}
            <div>
                {props.setDisplay ?
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