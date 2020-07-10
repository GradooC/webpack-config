import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
    labelOn: PropTypes.string,
    labelOff: PropTypes.string,
};

type Props = InferProps<typeof propTypes>;

const Checkbox: React.FC<Props> = ({ labelOff, labelOn }) => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label htmlFor="checkbox">
            {isChecked ? labelOn : labelOff}
            <input checked={isChecked} id="checkbox" type="checkbox" onChange={handleChange} />
        </label>
    );
};

Checkbox.propTypes = propTypes;

Checkbox.defaultProps = {
    labelOn: 'On',
    labelOff: 'Off',
};

export default Checkbox;
