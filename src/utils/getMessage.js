import isString from 'lodash.isstring';

export default function getMessage(messages, path) {
  let tempMessages = messages;
  let tempPath = null;

  path.split('.').forEach(fragment => {
    tempPath = tempPath === null ? fragment : `${tempPath}.${fragment}`;

    if (tempMessages[tempPath]) {
      tempMessages = tempMessages[tempPath];
      tempPath = null;
    }
  });

  if (tempPath !== null || !isString(tempMessages)) {
    return null;
  }

  return tempMessages;
}
