export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_LOCALE': {
      return {
        ...state,
        locale: action.locale,
        messages: action.messages,
      };
    }
    case 'ADD_MESSAGES': {
      return {
        ...state,
        messages: { ...action.messages, ...state.messages },
      };
    }
    default: {
      return state;
    }
  }
}
