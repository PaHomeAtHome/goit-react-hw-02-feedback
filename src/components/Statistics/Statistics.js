import { Text } from './StatisticStyles';
import PropTypes from 'prop-types';

export default function Statistics({ state, total, positivePercentage }) {
  const stats = Object.keys(state).map(key => (
    <Text key={key}>
      {key}: {state[key]}
    </Text>
  ));

  const result = (
    <>
      {stats}
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </>
  );

  return result;
}

Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
