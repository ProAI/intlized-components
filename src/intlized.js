import React from 'react';
import { connect } from 'react-redux';
import IntlMessageFormat from 'intl-messageformat';
import { getRawMessage, getRealProps } from './utils';

const defaultConfig = {
  scope: '',
  html: false,
  intlizedProps: { children: '' },
};

export default function intlized(Component, customConfig) {
  // create config object
  const config = Object.assign({}, customConfig, defaultConfig);

  // split scope
  config.scope = config.scope.split('.');

  const mapStateToProps = (state, { variables, ...props }) => {
    const locale = state.intl.locale;

    return Object.keys(config.intlizedProps).map((propName) => {
      const key = config.intlizedProps[propName];
      const rawMessage = getRawMessage(props[key], config.scope, state.intl.messages);

      return new IntlMessageFormat(rawMessage, locale).format(variables);
    });
  };

  function FormattedComponent({ ...props }) {
    return <Component {...getRealProps(props, config.intlizedProps)} />;
  }

  return connect(mapStateToProps)(FormattedComponent);
}
