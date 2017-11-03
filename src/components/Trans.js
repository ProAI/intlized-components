import React from 'react';
import PropTypes from 'prop-types';
import injectIntl from './injectIntl';
import intlProp from './intlProp';

const propTypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string.isRequired,
  // intlized component prop
  ...intlProp,
};

function Trans({ intl, ...props }) {
  return <span>{intl.trans(props)}</span>;
}

Trans.propTypes = propTypes;

export default injectIntl(Trans);
