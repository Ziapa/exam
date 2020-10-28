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
    const [color, setColor] = useState<boolean>(true)
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
            setDisableBtn(true)
            setError("max не может быть меньше 0")
            setMax(value)
        } else if (value === min) {
            setDisableBtn(true)
            setError("max не может быть равен min")
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
                disableIncReset={disableIncReset}
                disableBtn={disableBtn}
                error={error}
                incPlus={incPlus}
                onDisable={onDisable}
                offDisable={offDisable}
                disable={disable}
                changeInc={changeInc}
                changeMin={changeMin}
                changeMax={changeMax}
                min={min}
                max={max}
                display={true}
                button={true}
            />
            <Counter
                disableIncReset={disableIncReset}
                disableBtn={disableBtn}
                error={error}
                incPlus={incPlus}
                onDisable={onDisable}
                offDisable={offDisable}
                disable={disable}
                inc={inc}
                changeInc={changeInc}
                changeMin={changeMin}
                changeMax={changeMax}
                min={min}
                max={max}
                display={false}
                button={false}
            />


        </div>
    );
}

export default App;
