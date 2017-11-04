import IntlMessageFormat from 'intl-messageformat';
import getRawMessage from './getRawMessage';
import isString from './isString';

const defaultConfig = {
  strict: true,
  scope: null,
  warnings: false,
};

export default function translate(args, state, customConfig) {
  const config = Object.assign({}, defaultConfig, customConfig);

  // if prop is not defined, return
  if (!args) {
    return null;
  }

  // strict mode is disabled, so prop can be a non-intlized string, too.
  if (!config.strict && isString(args)) {
    return args;
  }

  // check if id and default message are defined
  if (!args.id || !args.defaultMessage) {
    // eslint-disable-next-line no-console
    console.log(`Invalid translation object: ${args}`);
    return null;
  }

  // get message
  const message = getRawMessage(args.id, config.scope, state.intl.messages);

  // message not found, use default message or message key
  if (config.warnings && !message) {
    const scopeErrorMessage = config.scope ? ` scope "${config.scope}" and` : '';
    if (args.defaultMessage) {
      // eslint-disable-next-line no-console
      console.warn(`Translation for${scopeErrorMessage} key "${args.id}" not found. Fallback to default message.`);
    } else {
      // eslint-disable-next-line no-console
      console.warn(`Translation for${scopeErrorMessage} key "${args.id}" not found. No default message found.`);
    }
  }

  // format message with variables
  const instance = new IntlMessageFormat(message || args.defaultMessage, state.intl.locale);
  return instance.format(args.variables);
}
