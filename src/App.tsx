import React from 'react';
import style from './style.module.css';
import natureImg from './assets/nature.jpg';

const App = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <>
            <div className={style.block}>App</div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <img src={natureImg}></img>
        </>
    );
};

export default App;
