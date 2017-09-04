import PropTypes from 'prop-types';
import IntlRelativeFormat from 'intl-relativeformat';
import { connect } from 'react-redux';

const propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  value: new IntlRelativeFormat(state.intl.currentLocale, props.options).format(props.value),
});

function TimeAgo({ value }) {
  return value;
}

TimeAgo.propTypes = propTypes;

export default connect(mapStateToProps)(TimeAgo);
