import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import reducer from './reducer';

const propTypes = {
  locale: PropTypes.string,
  defaultLocale: PropTypes.string,
  supportedLocales: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  locale: 'en',
  defaultLocale: 'en',
  supportedLocales: ['en'],
  messages: {},
};

function Provider({
  locale: initialLocale,
  defaultLocale,
  supportedLocales,
  messages: initialMessages,
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

  const addMessages = nextMessages => {
    dispatch({ type: 'ADD_MESSAGES', messages: nextMessages });
  };

  return (
    <Context.Provider
      value={{
        locale: state.locale,
        defaultLocale,
        supportedLocales,
        messages: state.messages,
        changeLocale,
        addMessages,
      }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = propTypes;
Provider.defaultProps = defaultProps;

export default Provider;
