import React, { useReducer, useMemo } from 'react';
import Context from './Context';
import reducer from './reducer';

/* eslint-disable react/prop-types */
function Provider({
  locale: initialLocale = 'en',
  defaultLocale = 'en',
  supportedLocales = ['en'],
  messages: initialMessages = {},
  children,
}) {
  const [state, dispatch] = useReducer(reducer, {
    locale: initialLocale,
    messages: initialMessages,
  });

  const changeLocale = (nextLocale, nextMessages) => {
    dispatch({
      type: 'CHANGE_LOCALE',
      locale: nextLocale,
      messages: nextMessages,
    });
  };

  const addMessages = (nextMessages) => {
    dispatch({ type: 'ADD_MESSAGES', messages: nextMessages });
  };

  const context = useMemo(
    () => ({
      locale: state.locale,
      defaultLocale,
      supportedLocales,
      messages: state.messages,
      changeLocale,
      addMessages,
    }),
    [state.locale, state.messages],
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
/* eslint-enable */

export default Provider;
