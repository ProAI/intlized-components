import React from 'react';
import PropTypes from 'prop-types';
import injectIntl from './injectIntl';
import intlProp from './intlProp';

const propTypes = {
  value: PropTypes.string.isRequired,
  // intlized component prop
  ...intlProp,
};

function TimeAgo({ intl, ...props }) {
  return <span>{intl.timeAgo(props)}</span>;
}

TimeAgo.propTypes = propTypes;

export default injectIntl(TimeAgo);
