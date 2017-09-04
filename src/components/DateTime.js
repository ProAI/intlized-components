import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  value: new Intl.DateTimeFormat(state.intl.currentLocale, props.options).format(props.value),
});

function DateTime({ value }) {
  return <span>{value}</span>;
}

DateTime.propTypes = propTypes;

export default connect(mapStateToProps)(DateTime);
