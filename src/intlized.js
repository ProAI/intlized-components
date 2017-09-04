import React from 'react';
import { connect } from 'react-redux';
import IntlMessageFormat from 'intl-messageformat';
import { getRawMessage, getRealProps } from './utils';

const defaultConfig = {
  scope: null,
  html: false,
  intlizedProps: { children: 'name' },
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
      const rawMessage = getRawMessage(props[key].split('.'), config.scope, state.intl.messages);

      if (!rawMessage) {
        // eslint-disable-next-line no-console
        console.error(`Translation for key "${props[key]}" not found.`);
        stateProps[propName] = props[key];
      } else {
        stateProps[propName] = new IntlMessageFormat(rawMessage, locale).format(variables);
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
