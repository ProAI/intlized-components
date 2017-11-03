import React from 'react';
import PropTypes from 'prop-types';
import injectIntl from './injectIntl';
import intlProp from './intlProp';

const propTypes = {
  component: PropTypes.node,
  render: PropTypes.func,
  children: PropTypes.func,
  // intlized component prop
  ...intlProp,
};

const defaultProps = {
  component: null,
  render: null,
  children: null,
};

function Intlized({
  intl, component: Component, render, children,
}) {
  if (render) {
    return render({ intl });
  }

  if (children) {
    return children({ intl });
  }

  return React.createElement(Component, { intl });
}

Intlized.propTypes = propTypes;
Intlized.defaultProps = defaultProps;

export default injectIntl(Intlized);
