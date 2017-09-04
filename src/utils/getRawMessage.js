export default function getRawMessage(key, scope, messages) {
  let message = null;

  scope.forEach((scopePart) => {
    message = message[scopePart];
  });

  return messages[key];
}
