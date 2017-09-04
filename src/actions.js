export function changeLocale(locale, messages) {
  return { type: 'INTLIZED_CHANGE_LOCALE', locale, messages };
}

export function addMessages(messages) {
  return { type: 'INTLIZED_ADD_MESSAGES', messages };
}
