import React from 'react';
import Image from './components/Image';
import style from './style.module.css';

const App: React.FC = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <>
            <div className={style.block}>App</div>
            <div>{counter}</div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <Image />
        </>
    );
};

export default App;
