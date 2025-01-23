import createDictHash from './createDictHash';

export default function createDict(...args) {
  const scope = args.length > 1 ? args[0] : createDictHash(args[0]);
  const defaultMessages = args.length > 1 ? args[1] : args[0];

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

    return { ...messages[key], variables };
  };
}
