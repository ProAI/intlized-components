import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectIntl from '../utils/injectIntl';
import connectOptions from '../utils/connectOptions';

const propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { value, ...ownProps }) => ({
  value: injectIntl(state).timeAgo(value, ownProps),
});

const enhance = connect(mapStateToProps, {}, null, connectOptions);

function TimeAgo({ value }) {
  return value;
}

TimeAgo.propTypes = propTypes;

export default enhance(TimeAgo);
