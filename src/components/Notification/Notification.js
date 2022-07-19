import { Notification } from './NotificationStyles';
import PropTypes from 'prop-types';

export default function NotificationMessage({ message }) {
  return <Notification>{message}</Notification>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
