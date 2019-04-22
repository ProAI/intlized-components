import IntlMessageFormat from 'intl-messageformat';
import getMessage from './getMessage';

export default function translate(state, translation) {
  // check if id and default message are defined
  if (!translation.id) {
    // eslint-disable-next-line no-console
    console.error('Invalid translation definition.');
    // eslint-disable-next-line no-console
    console.error(translation);

    return null;
  }

  // get message
  const message = getMessage(state.intl.messages, translation.id);

  // message not found, use default message or message key
  if (!message) {
    if (translation.defaultMessage) {
      // eslint-disable-next-line no-console
      console.warn(
        `Translation for key "${
          translation.id
        }" not found. Fallback to default message.`,
      );
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        `Translation for key "${
          translation.id
        }" not found. No default message found.`,
      );
    }
  }

  // format message with variables
  const instance = new IntlMessageFormat(
    message || translation.defaultMessage,
    state.intl.locale,
  );
  return instance.format(translation.variables);
}
