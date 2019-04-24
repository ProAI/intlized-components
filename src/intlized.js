import React from 'react';
import isString from 'lodash.isstring';
import getDisplayName from './utils/getDisplayName';
import useIntl from './hooks/useIntl';

export default function intlized(RawComponent, intlizedPropKeys) {
  // create component from strings like div or input
  const Component = isString(RawComponent)
    ? props => React.createElement(RawComponent, props)
    : RawComponent;

  const IntlizedComponent = props => {
    const intl = useIntl();
    const intlizedProps = {};

    // translate intlized props
    intlizedPropKeys.forEach(key => {
      if (props[key]) {
        if (typeof props[key] === 'function') {
          intlizedProps[key] = props[key](intl);
        } else if (!isString(props[key])) {
          intlizedProps[key] = intl.trans(props[key]);
        }
      }
    });

    return <Component {...props} {...intlizedProps} />;
  };

  IntlizedComponent.displayName = `Intlized(${getDisplayName(Component)})`;

  return IntlizedComponent;
}
