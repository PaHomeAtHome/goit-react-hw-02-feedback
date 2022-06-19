import Button from './FeedbackOptionsStyles';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {

    return Object.keys(options).map((key) => {
        const keyCapitalisation = key.charAt(0).toUpperCase() + key.slice(1);
        return <Button key={key} name={key} onClick={onLeaveFeedback}>{keyCapitalisation}</Button>
    });
}
    
FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func,
}