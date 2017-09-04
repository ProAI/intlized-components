import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  value: new Intl.DateTimeFormat(props.locale, props.options).format(props.value),
});

function DateTime({ value }) {
  return value;
}

DateTime.propTypes = propTypes;

export default connect(mapStateToProps)(DateTime);
