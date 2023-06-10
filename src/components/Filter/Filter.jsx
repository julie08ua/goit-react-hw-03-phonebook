import PropTypes from 'prop-types';
import { Input} from './Filter.styled';

export const Filter = ({ value, changeFilter }) => (
    <label>
        <p>Find contacts by name</p>
    <Input
        type="text"
        value={value}
        onChange={changeFilter} />
    </label>
);


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
};