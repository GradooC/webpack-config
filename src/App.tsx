import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import Image from './components/Image';
import Spinner from './components/Spinner';
import Checkbox from './components/Checkbox';
import { addTwo } from './utils';
import style from './style.module.css';

const App: React.FC = () => {
    const [counter, setCounter] = React.useState(0);
    const res = addTwo(counter);
    const hasSpinner = true;

    const renderImage = () => <Image />;

    const handleFunc = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            <div className={style.blockDiv}>App</div>
            <Checkbox />
            <div>{counter}</div>
            {hasSpinner && <Spinner />}
            <div>
                <button type="button" onClick={handleFunc}>
                    +
                </button>
            </div>
            <p>Hi there!!!!</p>
            <p>Add two result {res}</p>
            {renderImage()}
        </>
    );
};

export default hot(App);
