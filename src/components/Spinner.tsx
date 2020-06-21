import React from 'react';
import RedoIcon from '../assets/redo.svg';
import style from './style.module.css';

const Spinner: React.FC = () => (
    <div className={style.spinner}>
        <RedoIcon />
    </div>
);

export default Spinner;
