import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  value: new Intl.NumberFormat(props.locale, props.options).format(props.value),
});

function Number({ value }) {
  return value;
}

Number.propTypes = propTypes;

export default connect(mapStateToProps)(Number);
