import MessageFormat from 'messageformat';
import getMessage from './getMessage';

export default function translate(messages, locale, translation) {
  // check if id and default message are defined
  if (!translation.id) {
    // eslint-disable-next-line no-console
    console.error('Invalid translation definition.');
    // eslint-disable-next-line no-console
    console.error(translation);

    return null;
  }

  // get message
  const message = getMessage(messages, translation.id);

  // message not found, use default message or message key
  if (!message && !translation.defaultMessage) {
    // eslint-disable-next-line no-console
    console.error(
      `Translation for key "${
        translation.id
      }" not found. No default message found.`,
    );

    return null;
  }

  // format message with variables
  const instance = new MessageFormat(locale);
  return instance.compile(message || translation.defaultMessage)(
    translation.variables,
  );
}
