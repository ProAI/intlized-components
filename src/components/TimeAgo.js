import React from 'react';
import PropTypes from 'prop-types';
import IntlRelativeFormat from 'intl-relativeformat';
import { connect } from 'react-redux';

const propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  value: new IntlRelativeFormat(state.intl.locale, props.options).format(new Date(props.value)),
});

function TimeAgo({ value }) {
  return <span>{value}</span>;
}

TimeAgo.propTypes = propTypes;

export default connect(mapStateToProps)(TimeAgo);
