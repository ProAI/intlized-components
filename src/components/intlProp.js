import PropTypes from 'prop-types';

export default {
  intl: PropTypes.shape({
    trans: PropTypes.func,
    dateTime: PropTypes.func,
    timeAgo: PropTypes.func,
    number: PropTypes.func,
    locale: PropTypes.string,
  }).isRequired,
};
