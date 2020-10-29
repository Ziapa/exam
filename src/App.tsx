import React, {useState} from 'react';
import './App.scss';
import {Counter} from "./Counter";


function App() {

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [inc, setInc] = useState<number>(0)
    const [disable, setDisable] = useState<boolean>(true)
    const [disableBtn, setDisableBtn] = useState<boolean>(true)
    const [disableIncReset, setDisableIncReset] = useState<boolean>(true)
    const [error, setError] = useState<string>("Enter value and click 'set'")
    const onDisable = () => setDisable(true)
    const offDisable = () => setDisable(false)
    const changeMin = (value: number) => {
        if (value > max) {
            setDisableIncReset(true)
            setDisableBtn(true)
            setError("min не может быть больше max")
            setMin(value)
        } else if (value < 0) {
            setDisableBtn(true)
            setError("min не может быть меньше 0")
            setMin(value)
        } else if (value === max) {
            setDisableBtn(true)
            setError("min не может быть равен max")
            setMin(value)
        } else {
            setDisableIncReset(true)
            setDisableBtn(false)
            setError("Click 'set'")
            setMin(value)
        }
    }
    const changeMax = (value: number) => {
        if (value < min) {
            setDisableBtn(true)
            setError("max не может быть меньше min")
            setMax(value)
        } else if (value < 0) {
            setError("max не может быть меньше 0")
            setDisableBtn(true)
            setMax(value)
        } else if (value === min) {
            setError("max не может быть равен min")
            setDisableBtn(true)
            setMax(value)
        } else {
            setDisableIncReset(true)
            setDisableBtn(false)
            setError("Click 'set'")
            setMax(value)
        }
    }
    const incPlus = () => {
        if (inc === max) {
        } else {
            setInc(inc + 1)
        }
    }
    const changeInc = () => {

        offDisable()
        setInc(min)
        setDisableIncReset(false)
    }

    return (
        <div className={"wrapper"}>

            <Counter
                inc={inc}
                min={min}
                max={max}
                error={error}
                setDisplay={true}
                incPlus={incPlus}
                disable={disable}
                onDisable={onDisable}
                changeMin={changeMin}
                changeMax={changeMax}
                disableBtn={disableBtn}
            />
            <Counter
                inc={inc}
                max={max}
                error={error}
                setDisplay={false}
                incPlus={incPlus}
                disable={disable}
                onDisable={onDisable}
                changeInc={changeInc}
                changeMin={changeMin}
                changeMax={changeMax}
                disableIncReset={disableIncReset}
            />


        </div>
    );
}

export default App;
