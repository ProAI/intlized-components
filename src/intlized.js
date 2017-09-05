import React from 'react';
import { connect } from 'react-redux';
import IntlMessageFormat from 'intl-messageformat';
import { getRawMessage, getRealProps } from './utils';

const defaultConfig = {
  scope: null,
  html: false,
  intlizedProps: { children: 'transKey' },
};

export default function intlized(Component, customConfig) {
  // create config object
  const config = Object.assign({}, defaultConfig, customConfig);

  // split scope
  config.scope = config.scope ? config.scope.split('.') : [];

  const mapStateToProps = (state, { variables, ...props }) => {
    const locale = state.intl.locale;

    const stateProps = {};

    Object.keys(config.intlizedProps).forEach((propName) => {
      const key = config.intlizedProps[propName];
      const keys = props[key] ? props[key].split('.') : [];
      const rawMessage = getRawMessage(keys, config.scope, state.intl.messages);

      if (rawMessage && (typeof rawMessage === 'string' || rawMessage instanceof String)) {
        stateProps[propName] = new IntlMessageFormat(rawMessage, locale).format(variables);
      } else {
        const scope = config.scope ? config.scope.join('.') : '';
        // eslint-disable-next-line no-console
        console.error(`Translation for scope "${scope}" and key "${props[key]}" not found.`);
        stateProps[propName] = props[key];
      }
    });

    return stateProps;
  };

  function FormattedComponent(props) {
    // console.log(getRealProps(props, config.intlizedProps));
    return <Component {...getRealProps(props, config.intlizedProps)} />;
  }

  return connect(mapStateToProps, {})(FormattedComponent);
}
