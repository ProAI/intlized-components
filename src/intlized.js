import React from 'react';
import { connect } from 'react-redux';
import IntlMessageFormat from 'intl-messageformat';
import { getRawMessage, getRealProps, getTranslationKeys, getDefaultMessage } from './utils';

const defaultConfig = {
  scope: null,
  html: false,
  mappings: { children: 'transKey' },
};

export default function intlized(Component, customConfig) {
  // create config object
  const config = Object.assign({}, defaultConfig, customConfig);

  // split scope
  config.scope = config.scope ? config.scope.split('.') : [];

  const mapStateToProps = (state, { variables, ...props }) => {
    const locale = state.intl.locale;

    const stateProps = {};

    Object.keys(config.mappings).forEach((propName) => {
      const key = config.mappings[propName];

      const rawMessage = getRawMessage(
        getTranslationKeys(props[key]),
        config.scope,
        state.intl.messages,
      );

      if (rawMessage && (typeof rawMessage === 'string' || rawMessage instanceof String)) {
        stateProps[propName] = new IntlMessageFormat(rawMessage, locale).format(variables);
      } else {
        const scope = config.scope ? config.scope.join('.') : '';

        const defaultMessage = getDefaultMessage(props[key]);

        if (defaultMessage) {
          // eslint-disable-next-line no-console
          console.warn(
            `Translation for scope "${scope}" and key "${props[key].key ||
              props[key]}" not found. Fallback to default message.`,
          );
        } else {
          // eslint-disable-next-line no-console
          console.warn(
            `Translation for scope "${scope}" and key "${props[key].key ||
              props[key]}" not found. No default message found.`,
          );
        }

        stateProps[propName] = defaultMessage || props[key];
      }
    });

    return stateProps;
  };

  function FormattedComponent(props) {
    // console.log(getRealProps(props, config.mappings));
    return <Component {...getRealProps(props, config.mappings)} />;
  }

  return connect(mapStateToProps, {})(FormattedComponent);
}
