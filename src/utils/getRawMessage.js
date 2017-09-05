export default function getRawMessage(keys, scopes, messages) {
  let message = messages;
  let error = false;

  scopes.forEach((scope) => {
    if (!message[scope]) {
      error = true;
      return;
    }

    message = message[scope];
  });

  if (error) return null;

  keys.forEach((key) => {
    if (!message[key]) {
      error = true;
      return;
    }

    message = message[key];
  });

  if (error) return null;

  return message;
}
