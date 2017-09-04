export default function createReducer(
  currentLocale = 'en',
  defaultLocale = 'en',
  locales = ['en', 'de'],
  messages = {},
) {
  const initialState = {
    currentLocale,
    defaultLocale,
    locales,
    messages,
  };

  return function reducer(state = initialState, action) {
    switch (action.type) {
      case 'INTLIZED_CHANGE_LOCALE': {
        return {
          ...state,
          currentLocale: action.locale,
          messages: action.messages,
        };
      }
      case 'INTLIZED_ADD_MESSAGES': {
        return {
          ...state,
          messages: Object.assign({}, action.messages, state.messages),
        };
      }
      default: {
        return state;
      }
    }
  };
}
