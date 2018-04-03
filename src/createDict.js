export default function createDict(scope, defaultMessages) {
  const messages = {};

  Object.keys(defaultMessages).forEach((key) => {
    messages[key] = {
      id: `${scope}.${key}`,
      defaultMessage: defaultMessages[key],
    };
  });

  return function trans(key, variables) {
    if (!messages[key]) {
      throw new Error(`Could not find translation "${key}" in scope ${scope}.`);
    }

    return Object.assign({}, messages[key], { variables });
  };
}
