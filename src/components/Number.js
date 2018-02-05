import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectIntl from '../utils/injectIntl';
import connectOptions from '../utils/connectOptions';

const mapStateToProps = (state, { value, ...ownProps }) => ({
  value: injectIntl(state).number(value, ownProps),
});

const enhance = connect(mapStateToProps, {}, null, connectOptions);

const propTypes = {
  value: PropTypes.string.isRequired,
};

function Number({ value }) {
  return value;
}

Number.propTypes = propTypes;

export default enhance(Number);
