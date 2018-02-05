import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectIntl from '../utils/injectIntl';

const enhance = connect(
  (state, { value, ...options }) => ({
    value: injectIntl(state).number(value, options),
  }),
  {},
);

const propTypes = {
  value: PropTypes.string.isRequired,
};

function Number({ value }) {
  return value;
}

Number.propTypes = propTypes;

export default enhance(Number);
