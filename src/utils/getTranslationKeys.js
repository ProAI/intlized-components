export default function getTranslationKeys(key) {
  if (typeof key === 'string' || key instanceof String) {
    return key ? key.split('.') : [];
  }

  return key.key ? key.key.split('.') : [];
}
