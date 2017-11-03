import { connect } from 'react-redux';
import IntlRelativeFormat from 'intl-relativeformat';
import translate from '../utils/translate';

export default connect(state => ({
  intl: {
    trans: (args) => {
      const translation = translate(args, state);
      return translation;
    },
    dateTime: ({ value, ...options }) => {
      if (!value) return null;

      const instance = new Intl.DateTimeFormat(state.intl.locale, options);
      return instance.format(new Date(value));
    },
    number: ({ value, ...options }) => {
      if (!value) return null;

      const instance = new Intl.NumberFormat(state.intl.locale, options);
      return instance.format(value);
    },
    timeAgo: ({ value, ...options }) => {
      if (!value) return null;

      const instance = new IntlRelativeFormat(state.intl.locale, options);
      return instance.format(new Date(value));
    },
    locale: state.intl.locale,
  },
}));
