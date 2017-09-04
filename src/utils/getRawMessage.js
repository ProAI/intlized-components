export default function getRawMessage(key, scope, messages) {
  let message = messages;
  let error = false;

  scope.forEach((scopePart) => {
    if (!message[scopePart]) {
      error = true;
      return;
    }

    message = message[scopePart];
  });

  if (error) return null;

  key.forEach((keyPart) => {
    if (!message[keyPart]) {
      error = true;
      return;
    }

    message = message[keyPart];
  });

  if (error) return null;

  return message;
}
