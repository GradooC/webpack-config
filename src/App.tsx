import React from 'react';
import { hot } from 'react-hot-loader/root';
import Image from './components/Image';
import Spinner from './components/Spinner';
import { addTwo } from './utils';
import style from './style.module.css';

const App: React.FC = (props) => {
    const [counter, setCounter] = React.useState(0);
    const res = addTwo(counter);
    return (
        <>
            <div className={style.blockDiv}>App</div>
            <div>{counter}</div>
            <Spinner />
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <p>Hi there!!!!</p>
            <p>Add two result {res}</p>
            <Image />
        </>
    );
};

export default hot(App);
