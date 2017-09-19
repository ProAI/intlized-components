export default function getDefaultMessage(key) {
  if (key.default) {
    return key.default;
  }

  return null;
}
