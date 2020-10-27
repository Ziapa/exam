import React, {useState} from 'react';
import './App.scss';
import {Counter} from "./Counter";


function App() {


    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [set, setSet] = useState<boolean>(false)
    const offDisable = () => setSet(true)
    const onDisable = () => setSet(false)
    const changeMin = (value:number) => setMin(value)

    return (
        <div className={"wrapper"}>

            <Counter
                changeMin={changeMin}
                min={min}
                max={max}
                display={true}
                button={true}
            />
            <Counter
                changeMin={changeMin}
                min={min}
                max={max}
                display={false}
                button={false}
            />


        </div>
    );
}

export default App;
