import isString from './isString';

export default function getRawMessage(rawKey, rawScope, messages) {
  const keys = (rawScope ? [rawScope, rawKey].join('.') : rawKey).split('.');

  let message = messages;
  let error = false;

  keys.forEach((key) => {
    if (!message[key]) {
      error = true;
      return;
    }

    message = message[key];
  });

  // error found or result is not a string, return null
  if (error || !isString(message)) return null;

  return message;
}
