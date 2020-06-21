import React from 'react';
import Image from './components/Image';
import Spinner from "./components/Spinner";
import style from './style.module.css';

const App: React.FC = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <>
            <div className={style.blockDiv}>App</div>
            <div>{counter}</div>
            <Spinner />
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>

            <Image />
        </>
    );
};

export default App;
