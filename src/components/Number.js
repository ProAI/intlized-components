import React from 'react';
import PropTypes from 'prop-types';
import injectIntl from './injectIntl';
import intlProp from './intlProp';

const propTypes = {
  value: PropTypes.string.isRequired,
  // intlized component prop
  ...intlProp,
};

function Number({ intl, ...props }) {
  return <span>{intl.number(props)}</span>;
}

Number.propTypes = propTypes;

export default injectIntl(Number);
