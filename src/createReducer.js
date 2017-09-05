export default function createReducer(
  locale = 'en',
  defaultLocale = 'en',
  supportedLocales = ['en', 'de'],
  messages = {},
) {
  const initialState = {
    locale,
    defaultLocale,
    supportedLocales,
    messages,
  };

  return function reducer(state = initialState, action) {
    switch (action.type) {
      case 'INTLIZED_CHANGE_LOCALE': {
        return {
          ...state,
          locale: action.locale,
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
