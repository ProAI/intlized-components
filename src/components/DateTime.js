import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectIntl from '../utils/injectIntl';

const enhance = connect(
  (state, { value, ...options }) => ({
    value: injectIntl(state).dateTime(value, options),
  }),
  {},
);

const propTypes = {
  value: PropTypes.string.isRequired,
};

function DateTime({ value }) {
  return value;
}

DateTime.propTypes = propTypes;

export default enhance(DateTime);
