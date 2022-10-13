import { NotificationStyle } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <>
      <NotificationStyle>{message}</NotificationStyle>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
