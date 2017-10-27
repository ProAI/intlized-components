import { connect } from 'react-redux';
import IntlMessageFormat from 'intl-messageformat';
import { getRawMessage, isString } from './utils';

const defaultConfig = {
  scope: null,
  html: false,
  strict: true,
};

export default function intlized(intlizedPropNames, customConfig) {
  return (Component) => {
    // create config object
    const config = Object.assign({}, defaultConfig, customConfig);

    const mapStateToProps = (state, { ...props }) => {
      const { locale } = state.intl;

      const nextProps = {};

      intlizedPropNames.forEach((propName) => {
        const prop = props[propName];

        // strict mode is disabled, so prop can be a non-intlized string, too.
        if (!config.strict && isString(prop)) {
          nextProps[propName] = prop;
          return;
        }

        // get message
        const rawMessage = getRawMessage(prop.key, config.scope, state.intl.messages);

        // message not found, use default message or message key
        if (!rawMessage) {
          if (prop.default) {
            // eslint-disable-next-line no-console
            console.warn(`Translation for scope "${config.scope}" and key "${prop.key}" not found. Fallback to default message.`);
          } else {
            // eslint-disable-next-line no-console
            console.warn(`Translation for scope "${config.scope}" and key "${prop.key}" not found. No default message found.`);
          }

          nextProps[propName] = prop.default || prop.key;
          return;
        }

        // message found, set prop to message value
        nextProps[propName] = new IntlMessageFormat(rawMessage, locale).format(prop.variables);
      });

      return nextProps;
    };

    return connect(mapStateToProps)(Component);
  };
}
