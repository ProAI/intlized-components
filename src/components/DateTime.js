import React from 'react';
import PropTypes from 'prop-types';
import injectIntl from './injectIntl';
import intlProp from './intlProp';

const propTypes = {
  value: PropTypes.string.isRequired,
  // intlized component prop
  ...intlProp,
};

function DateTime({ intl, ...props }) {
  return <span>{intl.dateTime(props)}</span>;
}

DateTime.propTypes = propTypes;

export default injectIntl(DateTime);
