import {Display} from "./Display";
import {ButtonPlus} from "./ButtonPlus";
import React, {ChangeEvent, useState} from "react";

type CounterPropsType = {
    display: boolean
    button: boolean
    min: number
    max: number
    changeMin: (value: number) => void
}

export function Counter(props: CounterPropsType) {



    const changeMin = (e: ChangeEvent<HTMLInputElement>) => {

        props.changeMin(e.currentTarget.valueAsNumber)
    }
    const resetMin = () => props.changeMin(0)

    return (

        <div className="App">
            {props.display ?
                <div>
                    <input value={props.max} onChange={() => {
                    }} type="number"/>
                    <input value={props.min} onChange={changeMin} type="number"/>
                </div>
                :
                <Display set={true} max={props.max} min={props.min} count={props.min}/>}
            <div>
                {props.button ?
                    <div className={"btnArea"}>
                        < ButtonPlus
                            title={"set"}
                            changeStatus={""}
                            changeCount={()=>{}}/>
                    </div>

                    :
                    <div className={"btnArea"}>
                        < ButtonPlus
                            title={"inc"}
                            changeStatus={""}
                            changeCount={()=>{}}/>

                        <ButtonPlus
                            title={"reset"}
                            changeCount={()=>{}}/>
                    </div>
                }
            </div>


        </div>
    );
}