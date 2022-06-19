import { Text } from './StatisticStyles';
import PropTypes from 'prop-types';

export default function Statistics({ state, total, percentage }) {

    const stats = Object.keys(state).map((key) =>
        <Text key={key}>{key}: {state[key]}</Text>);
    
    const result = <>{stats}<Text>Total: {total}</Text><Text>Positive feedback: {percentage}%</Text></>;

    return result;
}

Statistics.propTypes = {
    state: PropTypes.object.isRequired,
    total: PropTypes.number,
    percentage: PropTypes.number
}

