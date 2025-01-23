import React from 'react';
import isString from 'lodash.isstring';
import getDisplayName from './utils/getDisplayName';
import useIntl from './hooks/useIntl';

export default function intlized(RawComponent, intlizedPropKeys) {
  // create component from strings like div or input
  const Component = isString(RawComponent)
    ? (props) => React.createElement(RawComponent, props)
    : RawComponent;

  function IntlizedComponent(props) {
    const intl = useIntl();
    const intlizedProps = {};

    // translate intlized props
    intlizedPropKeys.forEach((key) => {
      const { [key]: value } = props;

      if (value) {
        if (typeof prop === 'function') {
          intlizedProps[key] = value(intl);
        } else if (!isString(value)) {
          intlizedProps[key] = intl.trans(value);
        }
      }
    });

    return <Component {...props} {...intlizedProps} />;
  }

  IntlizedComponent.displayName = `Intlized(${getDisplayName(Component)})`;

  return IntlizedComponent;
}
