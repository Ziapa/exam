import React, {useState} from 'react';
import './App.scss';
import { Counter} from "./Counter";
import {ButtonPlus} from "./ButtonPlus";


function App() {

    const [count, setCount] = useState(0)
    let changeCount = () => count !== 5 && setCount(count + 1)
    let resetCount = () => setCount(0)

    return (
        <div className="App">
            <Counter count={count}/>
            <div className={"btnArea"}>
                <ButtonPlus
                    title={"inc"}
                    changeStatus={ count === 5 ? "error" : "notError"}
                    changeCount={changeCount}/>

                <ButtonPlus
                    title={"reset"}
                    changeCount={resetCount}/>
            </div>
        </div>
    );
}

export default App;
