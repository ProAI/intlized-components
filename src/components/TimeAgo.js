import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectIntl from '../utils/injectIntl';

const enhance = connect(
  (state, { value, options }) => ({
    value: injectIntl(state).timeAgo(value, options),
  }),
  {},
);

const propTypes = {
  value: PropTypes.string.isRequired,
};

function TimeAgo({ value }) {
  return value;
}

TimeAgo.propTypes = propTypes;

export default enhance(TimeAgo);
